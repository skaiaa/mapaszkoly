var Plan = Plan || {};

var Canvas = function() {
	this.Update = function() {
		Plan.svg.attr("width", $('#canvas').width())
        		.attr("height", $('window').height());
	};
};
Plan.Canvas = new Canvas;

var Levels = function() {
	this.actualLevel = 0; //from -1 to 3
	this.Initialize = function() {
		Plan.Levels.HideAll(0);
		$("svg #level"+this.actualLevel).fadeIn(400);
	};
	this.HideAll = function(time) {
		$( "g[id^='level']" ).fadeOut(time);
	};
	this.SetLevel = function(newLevel) {
		if(this.actualLevel != newLevel) {
			Plan.Levels.HideAll(600);
			this.actualLevel = newLevel;
			$("svg #level"+this.actualLevel).fadeIn(400);
		}
	};
};
Plan.Levels = new Levels;


d3.xml("data/plan.svg", "image/svg+xml", function(xml) {
	document.getElementById("canvas").appendChild(xml.documentElement);
	Plan.svg = d3.select('#canvas svg');
	console.log($('#canvas').width());
	Plan.Canvas.Update();

	afterLoad();
});
