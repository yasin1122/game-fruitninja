function CTextButton(iXPos,iYPos,oSprite,szText,szFont,szColor,iFontSize,oContainer){
    var _bDisable;
    var _iWidth;
    var _iHeight;
    var _aCbCompleted;
    var _aCbOwner;
    var _oListenerDown;
    var _oListenerRelease;
    
    var _oButton;
    var _oButtonBg;
    var _oText;
    var _oContainer;
    
    this._init =function(iXPos,iYPos,oSprite,szText,szFont,szColor,iFontSize,oContainer){
        _bDisable = false;
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        _oContainer = oContainer;

        _oButton = new createjs.Container();
        _oButton.x = iXPos;
        _oButton.y = iYPos;
        _oButton.cursor = "pointer";
        _oContainer.addChild(_oButton);

        _oButtonBg = createBitmap( oSprite);
        _oButtonBg.regX = oSprite.width/2;
        _oButtonBg.regY = oSprite.height/2;
        _iWidth = oSprite.width;
        _iHeight = oSprite.height;
        _oButton.addChild(_oButtonBg);
        
        var iStepShadow = Math.ceil(iFontSize/20);
        
        var iWidth = oSprite.width-40;
        var iHeight = oSprite.height-20;
        var iX = -6;
        var iY = -4;
        _oText = new CTLText(_oButton, 
                    iX-iWidth/2, iY-iHeight/2, iWidth, iHeight, 
                    44, "center", FONT_COLOR, FONT_GAME, 1,
                    2, 2,
                    szText,
                    true, true, false,
                    false );
        _oText.setShadow("#000", 2,2,2);
        

        this._initListener();
    };
    
    this.unload = function(){
       _oButton.off("mousedown",_oListenerDown);
       _oButton.off("pressup" , _oListenerRelease); 
       
       _oContainer.removeChild(_oButton);
    };
    
    this.setVisible = function(bVisible){
        _oButton.visible = bVisible;
    };
    
    this.enable = function(){
        _bDisable = false;

	_oText.setColor("#fff");
    };
    
    this.disable = function(){
        _bDisable = true;
		
	_oText.setColor("#a39b9d");
    };
    
    this._initListener = function(){
       _oListenerDown = _oButton.on("mousedown", this.buttonDown);
       _oListenerRelease = _oButton.on("pressup" , this.buttonRelease);      
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.buttonRelease = function(){
        if(_bDisable){
            return;
        }
        
        
        playSound("click", 1,false);
        
        
        _oButton.scaleX = 1;
        _oButton.scaleY = 1;

        if(_aCbCompleted[ON_MOUSE_UP]){
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP]);
        }
    };
    
    this.buttonDown = function(){
        if(_bDisable){
            return;
        }
        _oButton.scaleX = 0.9;
        _oButton.scaleY = 0.9;

       if(_aCbCompleted[ON_MOUSE_DOWN]){
           _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN]);
       }
    };
    
    this.setPosition = function(iXPos,iYPos){
         _oButton.x = iXPos;
         _oButton.y = iYPos;
    };
    
    this.changeText = function(szText){
        _oText.refreshText(szText);
    };
    
    this.setX = function(iXPos){
         _oButton.x = iXPos;
    };
    
    this.setY = function(iYPos){
         _oButton.y = iYPos;
    };
    
    this.getButtonImage = function(){
        return _oButton;
    };

    this.getX = function(){
        return _oButton.x;
    };
    
    this.getY = function(){
        return _oButton.y;
    };

    this._init(iXPos,iYPos,oSprite,szText,szFont,szColor,iFontSize,oContainer);
    
    return this;
    
}