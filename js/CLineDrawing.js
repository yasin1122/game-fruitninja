function CLineDrawing(iStartX,iStartY,oContainer){
    
    var _oLineGfx;
    var _oLineShape;
    
    this._init = function(iStartX,iStartY,oContainer){
        _oLineGfx = new createjs.Graphics();
        _oLineGfx.setStrokeStyle(5);
        _oLineGfx.beginStroke("rgba(0,0,0,1)");
        _oLineGfx.moveTo(iStartX, iStartY);

        _oLineShape = new createjs.Shape(_oLineGfx);
        oContainer.addChild(_oLineShape);
    };
    
    this.hide = function(){
        createjs.Tween.get(_oLineShape).to({alpha:0}, 1000).call(function(){_oLineGfx.clear();}); 
    };
    
    this.updateDraw = function(iX,iY){
        _oLineGfx.lineTo(iX,iY);
    };
    
    this._init(iStartX,iStartY,oContainer);
}