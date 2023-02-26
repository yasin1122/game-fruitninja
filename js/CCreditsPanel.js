function CCreditsPanel(){
    
    var _oBg;
    var _oButLogo;
    var _oButExit;
    var _oFade;
    
    var _oHitArea;
    
    var _pStartPosExit;
    var _oListener;
    
    var _oContainer;
    
    this._init = function(){
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0;
        s_oStage.addChild(_oFade);
        new createjs.Tween.get(_oFade).to({alpha:0.7},500);
        
        var oSpriteMsgBox = s_oSpriteLibrary.getSprite('help_bg');
        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);

        
        _oBg = createBitmap(oSpriteMsgBox);
        _oContainer.addChild(_oBg);
        
        _oHitArea = new createjs.Shape();
        _oHitArea.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oHitArea.alpha = 0.01;
        _oListener = _oHitArea.on("click", this._onLogoButRelease);
        _oContainer.addChild(_oHitArea);
                
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: 715 , y: 460};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, _oContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this.unload, this);
        
        var iWidth = 550;
        var iHeight = 50;
        var iX = CANVAS_WIDTH/2;
        var iY = CANVAS_HEIGHT/2 - 76;
        var oMsgText = new CTLText(_oContainer, 
                    iX-iWidth/2, iY-iHeight/2, iWidth, iHeight, 
                    44, "center", FONT_COLOR, FONT_GAME, 1,
                    2, 2,
                    TEXT_CREDITS_DEVELOPED,
                    true, true, false,
                    false );
        oMsgText.setShadow("#000", 2,2,2);
       
        oSprite = s_oSpriteLibrary.getSprite('logo_ctl');
        _oButLogo = createBitmap(oSprite);
        _oButLogo.regX = oSprite.width/2;
        _oButLogo.regY = oSprite.height/2;
        _oButLogo.x = CANVAS_WIDTH/2;
        _oButLogo.y = CANVAS_HEIGHT/2;
        _oContainer.addChild(_oButLogo);
        
        var iWidth = 550;
        var iHeight = 50;
        var iX = CANVAS_WIDTH/2;
        var iY = CANVAS_HEIGHT/2 + 70;
        var oLinkBack = new CTLText(_oContainer, 
                    iX-iWidth/2, iY-iHeight/2, iWidth, iHeight, 
                    38, "center", FONT_COLOR, FONT_GAME, 1,
                    2, 2,
                    "www.codethislab.com",
                    true, true, false,
                    false );
        oLinkBack.setShadow("#000", 2,2,2);

       
        _oContainer.alpha = 0;
	new createjs.Tween.get(_oContainer).to({alpha:1},1000, createjs.Ease.cubicOut);	
    };
    
    this.unload = function(){
        _oHitArea.off("click", _oListener);
        
        _oButExit.unload(); 
        _oButExit = null;
        
        s_oStage.removeChild(_oFade);
        s_oStage.removeChild(_oContainer);
    };
    
    this._onLogoButRelease = function(){
        window.open("http://www.codethislab.com/index.php?&l=en","_blank");
    };
    
    this._init();
    
    
};


