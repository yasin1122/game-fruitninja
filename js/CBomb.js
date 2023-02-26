function CBomb(iX,iY,oSpriteSheet,oDim,iSpeed,iType,oAttachContainer){
    var _bSliced;
    var _iRunTime = 0;
    var _iRunFactor;
    var _iSpeed;
    var _iShiftx;
    var _iRotFactor;
    var _iType;
    var _iSliceLenOffset;
    var _iRadius;
    var _iBrightness;
    var _iRotRay;
    var _iIdInterval;
    var _iIdRayInterval;
    var _iCurTrembleIndex;
    var _iTimeRay;
    var _vStartDir;
    var _oFinalPos;
    var _aTrembleSequence;
    var _oDim;
    
    var _oSprite;
    var _oAttachRay;
    var _oAttachContainer;
    
    this._init = function(iX,iY,oSpriteSheet,oDim,iSpeed,iType,oAttachContainer){
        _oAttachContainer = oAttachContainer;
        _bSliced= false;
        _oDim = oDim;
        
        _oAttachRay = new createjs.Container();
        _oAttachContainer.addChild(_oAttachRay);
        
        _oSprite = createSprite(oSpriteSheet, "idle",oDim.regX,oDim.regY,oDim.width,oDim.height);
        _oSprite.x = iX;
        _oSprite.y = iY;
        _oSprite.regX = _oDim.width/2;
        _oSprite.regY = _oDim.height/2;
        _oAttachContainer.addChild(_oSprite);
        
        if(_oDim.width < _oDim.height){
            _iRadius = Math.floor(_oDim.width/2);
        }else{
            _iRadius = Math.floor(_oDim.height/2);
        }
        _iSliceLenOffset = Math.floor((_iRadius * 2) * 0.5);
        _iSliceLenOffset = Math.pow(_iSliceLenOffset,2);

        _iSpeed = iSpeed;
        _iRunFactor = _iSpeed/9;
        if(iX > (CANVAS_WIDTH/2) ){
            _iShiftx = randomFloatBetween(-0.5,0,2);
        }else{
            _iShiftx = randomFloatBetween(0,0.5,2);
        }
        
        _iRotFactor = randomFloatBetween(-MAX_FRUIT_ROT_SPEED,MAX_FRUIT_ROT_SPEED,2);
        _vStartDir = new CVector2(0,-1);
        _iType = iType;
        
        _aTrembleSequence = new Array({x:10,y:0},{x:-20,y:0},{x:10,y:-10},{x:0,y:20},{x:10,y:-10},{x:-10,y:0});
        
        
        playSound("bomb_fuse",1,false);
        
    };
    
    this.unload = function(){
        stopSound("bomb_fuse");
        _oAttachContainer.removeChild(_oSprite);
    };
    
    this.explode = function(){
        
        stopSound("bomb_fuse");
        playSound(s_aFruitSpliceSound[_iType],1,false);
        
        
        _iBrightness = 0;
        _iCurTrembleIndex = 0;
        _iRotRay = 0;
        _iTimeRay = 200;
        _bSliced = true;
        _oFinalPos = {x:_oSprite.x,y:_oSprite.y};

        var oParent = this;
        _iIdInterval = setInterval(function(){oParent.changeBrightness();oParent.tremble();},20);
        _iIdRayInterval = setInterval(function(){oParent.showRay()},150);
    };
    
    this.tremble = function(){
        var oDir = _aTrembleSequence[_iCurTrembleIndex];
        _oSprite.x = _oSprite.x + oDir.x;
        _oSprite.y = _oSprite.y + oDir.y;

        _iCurTrembleIndex++;
        if(_iCurTrembleIndex === _aTrembleSequence.length){
            _iCurTrembleIndex = 0;
        }
    };
    
    this.showRay = function(){
        var oSprite = s_oSpriteLibrary.getSprite('bomb_ray');
        var oRay = createBitmap(oSprite);
        oRay.alpha = 0;
        oRay.regY = oSprite.height/2;
        oRay.x = _oFinalPos.x;
        oRay.y = _oFinalPos.y;
        oRay.scaleX = randomFloatBetween(0.5,1,2);
        oRay.rotation = _iRotRay;
        _oAttachRay.addChild(oRay);
        
        createjs.Tween.get(oRay).to({alpha:1}, 200);
        
        _iRotRay += randomFloatBetween(40,55,1);
        
        if(_iRotRay > 320){
            clearInterval(_iIdInterval);
            clearInterval(_iIdRayInterval);
            s_oGame.showExplosion();
        }
    };
    
    this.changeBrightness = function(){
        if(_iBrightness <201){
		
            var oMatrix = new createjs.ColorMatrix().adjustBrightness(_iBrightness);
            _oSprite.filters = [
                new createjs.ColorMatrixFilter(oMatrix)
            ];
            _oSprite.cache(0,0, _oDim.width, _oDim.height);
            _iBrightness +=4;
        }
    };
    
    this.getCenter = function(){
        return new CVector2(_oSprite.x,_oSprite.y);
    };
    
    this.getRadius = function(){
        return _iRadius;
    };
    
    this.getSliceOffset = function(){
        return _iSliceLenOffset;
    };
    
    this.getY = function(){
        return _oSprite.y;
    };
    
    this.getSprite = function(){
        return _oSprite;
    };
    
    this.getRotation = function(){
        return _oSprite.rotation;
    };
    
    this.getVectorDir = function(){
        return rotateVector2D(toRadian(-_oSprite.rotation),_vStartDir);
    };
    
    this.isSliced = function(){
        return _bSliced;
    };
    
    this.getType = function(){
        return _iType;
    };
    
    this.update = function(){
        _iRunTime += _iRunFactor;
        if(_bSliced === false){
            _oSprite.y = _oSprite.y - _iSpeed + _iRunTime * _iRunTime/1000;
            _oSprite.x = _oSprite.x + _iRunTime*0.1*_iShiftx;
            _oSprite.rotation += _iRotFactor;
        }
    };
    
    this._init(iX,iY,oSpriteSheet,oDim,iSpeed,iType,oAttachContainer);
}