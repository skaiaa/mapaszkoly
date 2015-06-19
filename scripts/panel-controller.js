var Panel = Panel || {};

//Obiekt odpowiadający za obsługę panelu czasu
var Time = function () {
	this.Update = function (time) {
	  //Akutalizuje stan przycsku przy dniach
		$("#days").find("#"+time.day).button("toggle");
    //Aktualizuje stan listy godzin lekcyjnych
		$("#lessons option[id='"+time.lesson+"']").attr("selected", "selected");
	}
}
Panel.Time = new Time;
