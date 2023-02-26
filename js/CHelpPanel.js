function CHelpPanel(){
    var _oText;
    var _oHelpBg;
    var _oButExit;
    var _oContainer;

    this._init = function(){
        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);
        
        _oHelpBg = new createBitmap(s_oSpriteLibrary.getSprite('help_bg')); 
	_oContainer.addChild(_oHelpBg);
        
        var szText;
        if(s_bMobile){
            szText = TEXT_HELP_MOBILE;
        }else{
            szText = TEXT_HELP;
        }
       
        var iWidth = 550;
        var iHeight = 350;
        var iX = CANVAS_WIDTH/2;
        var iY = 620;
        _oText = new CTLText(_oContainer, 
                    iX-iWidth/2, iY-iHeight/2, iWidth, iHeight, 
                    70, "center", FONT_COLOR, FONT_GAME, 1,
                    2, 2,
                    szText,
                    true, true, true,
                    false );
        _oText.setShadow("#000", 2,2,2);
       
        var oSprite = s_oSpriteLibrary.getSprite('but_play');
        _oButExit = new CTextButton((CANVAS_WIDTH/2),CANVAS_HEIGHT -280,oSprite,TEXT_PLAY,FONT_GAME,"#ffc600",60,_oContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this); 

        

    };

    this.unload = function(){
        _oButExit.unload();
        
        _oContainer.removeAllChildren();
    };

    this._onExit = function(){
        this.unload();
        s_oGame.exitFromHelp();
    };

    this._init();

}