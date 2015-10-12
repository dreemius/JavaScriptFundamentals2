var total=0
for (var i=0; i<15; i++) {
    var first = Math.floor((Math.random() * 6) + 1); 
    var second = Math.floor((Math.random() * 6) + 1);
  	if(first==second) {
  		document.getElementById("result").innerHTML += "Выпал дубль. Число" + first + "<br>";
  	} else {
  		document.getElementById("result").innerHTML += "Первая кость:" + first + "Вторая кость:" + second + "<br>";
  	}
  	if (first==1 && second==1) {
		document.getElementById("result").innerHTML += "Две еденицы <br>";
	} if(first==6 && second==6) {
		document.getElementById("result").innerHTML += "Две шестёрки <br>";
	}
	total+=first+second;
		document.getElementById("result").innerHTML += "Сума" + total + "<br>";
}

document.getElementById("result").innerHTML += (total>=100) ? "Победа, вы набрали" + total + "очков" : "Вы проиграли, у вас" + total + "очков" + "<br>";
