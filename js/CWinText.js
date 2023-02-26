function CWinText(iX,iY,szText,szColor){
    
    var _oContainer;
    
    this._init = function(iX,iY,szText,szColor){
        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        s_oStage.addChild(_oContainer);
        
        var oText = new createjs.Text("+"+szText,"70px "+FONT_GAME, szColor);
        oText.textAlign = "center";
        oText.textBaseline = "middle";
        oText.shadow = new createjs.Shadow("#000000", 2, 2, 3);
        _oContainer.addChild(oText);
        
        var iRandTime = Math.floor(Math.random()*1500) + 500;
        var oParent = this;
        createjs.Tween.get(oText).to({y:oText.y - 100}, iRandTime,createjs.Ease.sineOut).call(function(){
                                                                    createjs.Tween.get(oText).to({alpha:0}, 500).call(function(){oParent.unload();});
                                                                                });  
    };
    
    this.unload = function(){
        s_oStage.removeChild(_oContainer);
    };
    
    this._init(iX,iY,szText,szColor);
}