function CGfxButton(iXPos,iYPos,oSprite,oParentContainer){
    
    var _aCbCompleted;
    var _aCbOwner;
    var _oListenerDown;
    var _oListenerRelease;
    var _oListenerOver;
    var _oListenerMove;
    var _oListenerOut;
    
    var _oButton;
    var _oParentContainer;
    
    this._init =function(iXPos,iYPos,oSprite){
        
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _oButton = new createBitmap( oSprite);
        _oButton.x = iXPos;
        _oButton.y = iYPos; 
                                   
        _oButton.regX = oSprite.width/2;
        _oButton.regY = oSprite.height/2;
        _oButton.cursor = "pointer";
        _oParentContainer.addChild(_oButton);
        
        
        this._initListener();
    };
    
    this.unload = function(){
       _oButton.off("mousedown",_oListenerDown);
       _oButton.off("pressup" , _oListenerRelease); 
       _oButton.off("pressmove" , _oListenerMove);
        if(s_bMobile === false){
            _oButton.off("mouseover" , _oListenerOver); 
            _oButton.off("mouseout" , _oListenerOut); 
        }
       
       
       _oParentContainer.removeChild(_oButton);
    };
    
    this.setVisible = function(bVisible){
        _oButton.visible = bVisible;
    };
    
    this._initListener = function(){
       _oListenerDown = _oButton.on("mousedown", this.buttonDown);
       _oListenerRelease = _oButton.on("pressup" , this.buttonRelease); 
       _oListenerMove = _oButton.on("pressmove" , this.onPressMove);
       if(s_bMobile === false){
            _oListenerOver = _oButton.on("mouseover" , this.buttonOver); 
            _oListenerOut = _oButton.on("mouseout" , this.buttonOut); 
        } 
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.buttonRelease = function(evt){
        
        playSound("click", 1,false);
        
        
        _oButton.scaleX = 1;
        _oButton.scaleY = 1;

        if(_aCbCompleted[ON_MOUSE_UP]){
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP],{event:evt});
        }
    };
    
    this.buttonDown = function(evt){
        _oButton.scaleX = 0.9;
        _oButton.scaleY = 0.9;

       if(_aCbCompleted[ON_MOUSE_DOWN]){
           _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN],{event:evt});
       }
    };
    
    this.onPressMove = function(evt){
        if(_aCbCompleted[ON_PRESS_MOVE]){
           _aCbCompleted[ON_PRESS_MOVE].call(_aCbOwner[ON_PRESS_MOVE],{event:evt});
       }
    };
    
    this.buttonOver = function(){
       if(_aCbCompleted[ON_MOUSE_OVER]){
           _aCbCompleted[ON_MOUSE_OVER].call(_aCbOwner[ON_MOUSE_OVER]);
       } 
    };
    
    this.buttonOut = function(){
       if(_aCbCompleted[ON_MOUSE_OUT]){
           _aCbCompleted[ON_MOUSE_OUT].call(_aCbOwner[ON_MOUSE_OUT]);
       } 
    };
    
    this.setPosition = function(iXPos,iYPos){
         _oButton.x = iXPos;
         _oButton.y = iYPos;
    };
    
    this.setX = function(iXPos){
         _oButton.x = iXPos;
    };
    
    this.setY = function(iYPos){
         _oButton.y = iYPos;
    };
    
    this.getSprite = function(){
        return _oButton;
    };
    
    
    this.getX = function(){
        return _oButton.x;
    };
    
    this.getY = function(){
        return _oButton.y;
    };
    
    _oParentContainer = oParentContainer;
    this._init(iXPos,iYPos,oSprite);
    
    return this;
}