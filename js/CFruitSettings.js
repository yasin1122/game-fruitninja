function CFruitSettings(){
    
    this._init = function(){
        s_aFruitSpriteSheet = new Array();
        s_aFruitSize = new Array();
        s_aFruitSpeed = new Array();
        s_aFruitColors = new Array();
        s_aFruitScore = new Array();
        s_aFruitSpliceSound = new Array();
        
        //FIRST FRUIT 
        var oSprite = s_oSpriteLibrary.getSprite('fruit_0');
        var oData = {   // image to use
			framerate : 8,
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: 90, height: 103, regX: 45, regY: 51},
                        animations: {   idle:[0],slice_1:[1],slice_2:[2],slice_3:[3],slice_4:[4],slice_5:[5],slice_6:[6],slice_7:[7],slice_8:[8]}
                        
        };
		
	s_aFruitSpriteSheet[0] = new createjs.SpriteSheet(oData);
        
        s_aFruitSize[0] = {width:90,height:103,regX:45,regY:51};
        s_aFruitSpeed[0] = 20;
        s_aFruitColors[0] = "#fdc06f";
        s_aFruitScore[0] = 20;
        s_aFruitSpliceSound[0] = "fruit_slice_2";
        
        //SECOND FRUIT
        oSprite = s_oSpriteLibrary.getSprite('fruit_1');
        oData = {   // image to use
			framerate : 8,
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: 90, height: 103, regX: 45, regY: 51},
                        animations: {   idle:[0],slice_1:[1],slice_2:[2],slice_3:[3],slice_4:[4],slice_5:[5],slice_6:[6],slice_7:[7],slice_8:[8]}
                        
        };
		
	s_aFruitSpriteSheet[1] = new createjs.SpriteSheet(oData);
        
        s_aFruitSize[1] = {width:90,height:103,regX:45,regY:51};
        s_aFruitSpeed[1] = 24;
        s_aFruitColors[1] = "#cc0001";
        s_aFruitScore[1] = 30;
        s_aFruitSpliceSound[1] = "fruit_slice_1";
        
        //THIRD FRUIT
        oSprite = s_oSpriteLibrary.getSprite('fruit_2');
        oData = {   // image to use
			framerate : 8,
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: 100, height: 122, regX: 50, regY: 61},
                        animations: {   idle:[0],slice_1:[1],slice_2:[2],slice_3:[3],slice_4:[4],slice_5:[5],slice_6:[6],slice_7:[7],slice_8:[8]}
                        
        };
		
	s_aFruitSpriteSheet[2] = new createjs.SpriteSheet(oData);
        
        s_aFruitSize[2] = {width:100,height:122,regX:50,regY:61};
        s_aFruitSpeed[2] = 24;
        s_aFruitColors[2] = "#74542d";
        s_aFruitScore[2] = 40;
        s_aFruitSpliceSound[2] = "fruit_slice_1";
        
        //FOURTH FRUIT
        oSprite = s_oSpriteLibrary.getSprite('fruit_3');
        oData = {   // image to use
			framerate : 8,
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: 87, height: 90, regX: 43, regY: 45},
                        animations: {   idle:[0],slice_1:[1],slice_2:[2],slice_3:[3],slice_4:[4],slice_5:[5],slice_6:[6],slice_7:[7],slice_8:[8]}
                        
        };
		
	s_aFruitSpriteSheet[3] = new createjs.SpriteSheet(oData);
        
        s_aFruitSize[3] = {width:87,height:90,regX:43,regY:45};
        s_aFruitSpeed[3] = 18;
        s_aFruitColors[3] = "#fd6909";
        s_aFruitScore[3] = 30;
        s_aFruitSpliceSound[3] = "fruit_slice_3";
        
        //FIFTH FRUIT
        oSprite = s_oSpriteLibrary.getSprite('fruit_4');
        oData = {   // image to use
			framerate : 8,
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: 83, height: 105, regX: 41, regY: 52},
                        animations: {   idle:[0],slice_1:[1],slice_2:[2],slice_3:[3],slice_4:[4],slice_5:[5],slice_6:[6],slice_7:[7],slice_8:[8]}
                        
        };
		
	s_aFruitSpriteSheet[4] = new createjs.SpriteSheet(oData);
        
        s_aFruitSize[4] = {width:83,height:105,regX:41,regY:52};
        s_aFruitSpeed[4] = 18;
        s_aFruitColors[4] = "#e8e570";
        s_aFruitScore[4] = 30;
        s_aFruitSpliceSound[4] = "fruit_slice_1";
        
        //SIXTH FRUIT
        oSprite = s_oSpriteLibrary.getSprite('fruit_5');
        oData = {   // image to use
			framerate : 8,
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: 200, height: 200, regX: 100, regY: 100},
                        animations: {   idle:[0],slice_1:[1],slice_2:[2],slice_3:[3],slice_4:[4],slice_5:[5],slice_6:[6],slice_7:[7],slice_8:[8]}
                        
        };
		
	s_aFruitSpriteSheet[5] = new createjs.SpriteSheet(oData);
        
        s_aFruitSize[5] = {width:200,height:200,regX:100,regY:100};
        s_aFruitSpeed[5] = 18;
        s_aFruitColors[5] = "#6da818";
        s_aFruitScore[5] = 10;
        s_aFruitSpliceSound[5] = "fruit_slice_3";
        
        //BOMB
        oSprite = s_oSpriteLibrary.getSprite('bomb');
        oData = {   // image to use
			framerate : 10,
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: 150, height: 150},
                        animations: {   idle:[0,1,"idle"]}
                        
        };
		
	s_aFruitSpriteSheet[6] = new createjs.SpriteSheet(oData);
        s_aFruitSize[6] = {width:150,height:150,regX:0,regY:0};
        s_aFruitSpeed[6] = 20;
        s_aFruitColors[6] = "#fff";
        s_aFruitScore[6] = 0;
        s_aFruitSpliceSound[6] = "explosion";
    };

    this._init();
}

var s_aFruitSpriteSheet;
var s_aFruitSize;
var s_aFruitSpeed;
var s_aFruitColors;
var s_aFruitScore;
var s_aFruitSpliceSound;