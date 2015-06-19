
function loadConfig (argument) {
	var xmlhttp = new XMLHttpRequest();
			var url = "data/config.json";

			xmlhttp.onreadystatechange = function() {
			    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			        var myArr = JSON.parse(xmlhttp.responseText);
			        

			        Panel.Time.Initialize(myArr);
			    }
			}

	xmlhttp.open("GET", url, true);
	xmlhttp.send();


}
