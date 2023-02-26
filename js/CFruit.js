function CFruit(iX,iY,oSpriteSheet,oDim,iSpeed,iType,oAttachContainer){
    var _bSliced;
    var _iRadius;
    var _iShiftx;
    var _iShiftLeftX;
    var _iShiftRightX;
    var _iSpeed;
    var _iRunTime = 0;
    var _iRunFactor;
    var _iRotFactor;
    var _iRotFactorSlice1;
    var _iRotFactorSlice2;
    var _iRunTimeSlice1 = 0;
    var _iRunTimeSlice2 = 0;
    var _iSliceLenOffset;
    var _iType;
    var _oDim;
    var _vStartDir;
    var _oSprite;
    var _oSlice1;
    var _oSlice2;
    var _oThisFruit;
    var _oAttachContainer;
    
    this._init = function(iX,iY,oSpriteSheet,oDim,iSpeed,iType,oAttachContainer){
        _oAttachContainer = oAttachContainer;

        _oSprite = createSprite(oSpriteSheet, "idle",oDim.regX,oDim.regY,oDim.width,oDim.height);
        _oSprite.x = iX;
        _oSprite.y = iY;
        _oAttachContainer.addChild(_oSprite);
        
        _bSliced= false;
        _oDim = oDim;
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
    };
    
    this.unload = function(){
        _oAttachContainer.removeChild(_oSprite);
    };
    
    this.setInfoAfterSlice = function(){
        _bSliced = true;
        
        if(_oSprite.rotation > 90){
            _iRunTimeSlice1 = _iRunTime + (_iRunFactor*2);
            _iRunTimeSlice2 = _iRunTime - (_iRunFactor*2);
            _iShiftLeftX = _iShiftx + 0.1;
            _iShiftRightX = _iShiftx - 0.1;
            _iRotFactorSlice1 = _iRotFactor * 1.2;
            _iRotFactorSlice2 = -_iRotFactor * 1.2;
        }else{
            _iRunTimeSlice1 = _iRunTime - (_iRunFactor*2);
            _iRunTimeSlice2 = _iRunTime + (_iRunFactor*2);
            _iShiftLeftX = _iShiftx - 0.1;
            _iShiftRightX = _iShiftx + 0.1;
            _iRotFactorSlice1 = -_iRotFactor * 1.2;
            _iRotFactorSlice2 = _iRotFactor * 1.2;
        }
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            playSound(s_aFruitSpliceSound[_iType],1,false);
        }
        
    };
    
    this.sliceDiagonalRight = function(){
        this.setInfoAfterSlice();
        
        _oSlice1 = createSprite(oSpriteSheet, "slice_1",oDim.regX,oDim.regY,oDim.width,oDim.height);
        _oSlice1.x = _oSprite.x;
        _oSlice1.y = _oSprite.y;
        _oSlice1.rotation =_oSprite.rotation;
        _oAttachContainer.addChild(_oSlice1);
        
        _oSlice2 = createSprite(oSpriteSheet, "slice_2",oDim.regX,oDim.regY,oDim.width,oDim.height);
        _oSlice2.x = _oSprite.x;
        _oSlice2.y = _oSprite.y;
        _oSlice2.rotation =_oSprite.rotation;
        _oAttachContainer.addChild(_oSlice2);
        
        _oThisFruit.unload();
    };
    
    this.sliceDiagonalLeft = function(){
        this.setInfoAfterSlice();
        
        _oSlice1 = createSprite(oSpriteSheet, "slice_3",oDim.regX,oDim.regY,oDim.width,oDim.height);
        _oSlice1.x = _oSprite.x;
        _oSlice1.y = _oSprite.y;
        _oSlice1.rotation =_oSprite.rotation;
        _oAttachContainer.addChild(_oSlice1);
        
        _oSlice2 = createSprite(oSpriteSheet, "slice_4",oDim.regX,oDim.regY,oDim.width,oDim.height);
        _oSlice2.x = _oSprite.x;
        _oSlice2.y = _oSprite.y;
        _oSlice2.rotation =_oSprite.rotation;
        _oAttachContainer.addChild(_oSlice2);
        
        _oThisFruit.unload();
    };
    
    this.sliceVertical = function(){
        this.setInfoAfterSlice();
       
        _oSlice1 = createSprite(oSpriteSheet, "slice_5",oDim.regX,oDim.regY,oDim.width,oDim.height);
        _oSlice1.x = _oSprite.x;
        _oSlice1.y = _oSprite.y;
        _oSlice1.rotation =_oSprite.rotation;
        _oAttachContainer.addChild(_oSlice1);
         
        _oSlice2 = createSprite(oSpriteSheet, "slice_6",oDim.regX,oDim.regY,oDim.width,oDim.height);
        _oSlice2.x = _oSprite.x;
        _oSlice2.y = _oSprite.y;
        _oSlice2.rotation =_oSprite.rotation;
        _oAttachContainer.addChild(_oSlice2);
        
        _oThisFruit.unload();
    };
    
    this.sliceHorizontal = function(){
        this.setInfoAfterSlice();
        
        _oSlice1 = createSprite(oSpriteSheet, "slice_7",oDim.regX,oDim.regY,oDim.width,oDim.height);
        _oSlice1.x = _oSprite.x;
        _oSlice1.y = _oSprite.y;
        _oSlice1.rotation =_oSprite.rotation;
        _oAttachContainer.addChild(_oSlice1);
        
        _oSlice2 = createSprite(oSpriteSheet, "slice_8",oDim.regX,oDim.regY,oDim.width,oDim.height);
        _oSlice2.x = _oSprite.x;
        _oSlice2.y = _oSprite.y;
        _oSlice2.rotation =_oSprite.rotation;
        _oAttachContainer.addChild(_oSlice2);
        
        _oThisFruit.unload();
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
    
    this.getX = function(){
        return _oSprite.x;
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
        }else{
            _iRunTimeSlice1 += _iRunFactor;
            _oSlice1.y = _oSlice1.y - _iSpeed + _iRunTimeSlice1 * _iRunTimeSlice1/1000;
            _oSlice1.x = _oSlice1.x + _iRunTime*0.1*_iShiftLeftX;
            _oSlice1.rotation += _iRotFactorSlice1;
            
            _iRunTimeSlice2 += _iRunFactor;
            _oSlice2.y = _oSlice2.y - _iSpeed + _iRunTimeSlice2 * _iRunTimeSlice2/1000;
            _oSlice2.x = _oSlice2.x + _iRunTime*0.1*_iShiftRightX;
            _oSlice2.rotation += _iRotFactorSlice2;
            
            var iRemove = 0;
            if(_oSlice1.y > Y_START_FRUIT){
                _oAttachContainer.removeChild(_oSlice1);
                iRemove++;
            }
            
            if(_oSlice2.y > Y_START_FRUIT){
                _oAttachContainer.removeChild(_oSlice1);
                iRemove++;
            }
            
            if(iRemove === 2){
                s_oGame.removeSlices(this);
            }
        }
    };
    
    _oThisFruit = this;
    
    this._init(iX,iY,oSpriteSheet,oDim,iSpeed,iType,oAttachContainer);
}