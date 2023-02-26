function CEndPanel(){
    
    var _oBg;
    var _oScoreText;
    var _oMsgText;
    var _oRestartBut;
    var _oGroup;
    
    this._init = function(){
        _oGroup = new createjs.Container();
        _oGroup.visible=false;
        s_oStage.addChild(_oGroup);
        
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('gameover_bg'));
        _oGroup.addChild(_oBg);
        
        var iWidth = 550;
        var iHeight = 90;
        var iX = CANVAS_WIDTH/2;
        var iY = CANVAS_HEIGHT/2 - 132;
        _oMsgText = new CTLText(_oGroup, 
                    iX-iWidth/2, iY-iHeight/2, iWidth, iHeight, 
                    80, "center", FONT_COLOR, FONT_GAME, 1,
                    2, 2,
                    " ",
                    true, true, false,
                    false );
        _oMsgText.setShadow("#000", 2,2,2);

        var iWidth = 550;
        var iHeight = 60;
        var iX = CANVAS_WIDTH/2;
        var iY = CANVAS_HEIGHT/2 + 52;
        _oScoreText = new CTLText(_oGroup, 
                    iX-iWidth/2, iY-iHeight/2, iWidth, iHeight, 
                    50, "center", FONT_COLOR, FONT_GAME, 1,
                    2, 2,
                    " ",
                    true, true, false,
                    false );
        _oScoreText.setShadow("#000", 2,2,2);

        var oSprite = s_oSpriteLibrary.getSprite('but_play');
        _oRestartBut = new CTextButton((CANVAS_WIDTH/2),CANVAS_HEIGHT -280,oSprite,TEXT_RESTART,FONT_GAME,"#ffc600",60,_oGroup);
        _oRestartBut.addEventListener(ON_MOUSE_UP, this._onButRestartRelease, this);
    };
    
    this.unload = function(){
        _oGroup.off("mousedown",this._onExit);
    };
    
    this._initListener = function(){
        _oGroup.on("mousedown",this._onExit);
    };
    
    this.show = function(iScore){
        _oMsgText.refreshText( TEXT_GAMEOVER );
        _oScoreText.refreshText( sprintf(TEXT_SCORE, iScore) );
        
        _oGroup.visible = true;
        
        $(s_oMain).trigger("save_score",iScore);
        $(s_oMain).trigger("show_interlevel_ad");
    };
    
    this._onExit = function(){
        _oGroup.off("mousedown",this._onExit);
        s_oStage.removeChild(_oGroup);
        
        s_oGame.onExit();
    };
    
    this._onButRestartRelease = function(){
        s_oStage.removeAllChildren();
        
        $(s_oMain).trigger("restart_level",1);
        s_oMain.gotoGame();
    };
    
    this._init();
    
    return this;
}