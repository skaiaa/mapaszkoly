var Panel = Panel || {};
//Obiekt odpowiadający za obsługę panelu czasu
var Time = function () {
	this.Initialize = function (config) {
		// TODO: pobrać wartości z configa
		$("#lessons").append('<option></option>');
	}

	this.Update = function (time) {
	  //Akutalizuje stan przycsku przy dniach
		$("#days").find("#"+time.day).button("toggle");
        //Aktualizuje stan listy godzin lekcyjnych
		$("#lessons option[id='"+time.lesson+"']").attr("selected", "selected");
	}
}
Panel.Time = new Time;

var Position = function () {
	this.Initialize = function () {
		this.Update();
		Plan.Levels.Initialize();
		$('input[name="levels"]').change( function() {
			  console.log($(this).val());
			  Plan.Levels.SetLevel($(this).val());
			});
	};
	this.Update = function() {
		$('#levels').find('#'+Plan.Levels.actualLevel).button('toggle')
	};
}
Panel.Position = new Position;
