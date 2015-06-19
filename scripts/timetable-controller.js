var Timetable = Timetable || {};

var Data = function () {
	//wywalić do JSON, dane w formacie hours*60+minutes
	this.lessonMinutes = [490,535,590,645,710,765,820,875,930,1020];
}
Timetable.Data = new Data();

var Time = function () {
	this.actualDate
	//Ustawiamy wybrany dzień
	this.SetDay = function (newDay) {
		this.day = newDay;
	}
	//Ustawiamy wybraną godzinę lekcyjną
	this.SetLesson = function (newLesson) {
		this.lesson = newLesson;
	}
	//Ustawiamy dzień oraz godzinę lekcyjną
	this.SetTime = function (newDay, newLesson) {
		this.SetDay(newDay);
		this.SetLesson(newLesson);
	}

	this.GetLessonFromTime = function (hours, minutes) {
		var dayMinutes = hours * 60 + minutes;
		var i = Timetable.Data.lessonMinutes.length-1;

		if (dayMinutes > Timetable.Data.lessonMinutes[i]) 
			return 0;
		else {
			while (dayMinutes < Timetable.Data.lessonMinutes[i] && i>0)
				i--;
			return i;
		}
	}
	//Aktualizujemy czas oraz sprawdzamy jaki mamy dzień i godzinę lekcyjną następnie ustawiamy je
	this.SetActualTime = function () {
		this.actualDate = new Date();
		var actualDay = this.actualDate.getDay();
		var actualLesson = this.GetLessonFromTime(this.actualDate.getHours(),this.actualDate.getMinutes());
		this.SetTime(actualDay,actualLesson);
	}

}
Timetable.Time = new Time();
