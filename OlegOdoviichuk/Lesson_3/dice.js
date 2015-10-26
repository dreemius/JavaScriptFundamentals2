  var total = 0;
document.getElementById("result").innerHTML += "<h2>START</h2>";



for (var i = 1; i <= 15; i++) {
	var first = Math.floor((Math.random() * 6) + 1); 
	var second = Math.floor((Math.random() * 6) + 1); 
	total+=first+second;
	document.getElementById("result").innerHTML += "Первая кость:" + first + " Вторая кость:" + second;
	
	if(first==second){
		document.getElementById("result").innerHTML += " - [Выпал дубль. Число " + first +"]";
		if(first==1 || first==6){
			document.getElementById("result").innerHTML += (first==1 ? " - Две единицы": " - Две шестерки");
		}
	}
	document.getElementById("result").innerHTML += "<br>";
}


document.getElementById("result").innerHTML += (total>=100) ? "<br>" + "Победа, вы набрали " + total + " очков!" : "<br>" + "Вы проиграли,  вы набрали " + total + " очков!"



