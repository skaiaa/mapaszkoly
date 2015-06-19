//Ładujemy svg na stronę
d3.xml("data/plan.svg", "image/svg+xml", function(xml) {
	document.getElementById("canvas").appendChild(xml.documentElement);
});

//Zmieniamy jego wielkość
$("#canvas").find("svg").css("height", $( window ).height());
