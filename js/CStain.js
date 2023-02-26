function CStain(iX,iY,iIndex,oAttachContainer){
    
    var _oSprite;
    var _oAttachContainer;
    
    this._init = function(iX,iY,iIndex,oAttachContainer){
        _oAttachContainer = oAttachContainer;
        
        var oSprite = s_oSpriteLibrary.getSprite('stain_'+iIndex);
        _oSprite = createBitmap(oSprite);
        _oSprite.x = iX;
        _oSprite.y = iY;
        _oSprite.regX = oSprite.width/2;
        _oSprite.regY = oSprite.height/2;
        _oAttachContainer.addChild(_oSprite);
        
        var oParent= this;
        createjs.Tween.get(_oSprite).wait(1000).to({alpha:0}, 1000).call(function(){oParent.unload();});  
    };
    
    this.unload = function(){
        _oAttachContainer.removeChild(_oSprite);
    };
    
    this._init(iX,iY,iIndex,oAttachContainer);
}