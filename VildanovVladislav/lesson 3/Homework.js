var total= 0,
	resultText = document.getElementById("result");

for (var i=0; i<15; i++) {
    var first = Math.floor((Math.random() * 6) + 1); 
    var second = Math.floor((Math.random() * 6) + 1);
	resultText.innerHTML += "Первая кость:" + first + "Вторая кость:" + second + "<br>";

  	if(first==second) {
  		resultText.innerHTML += "Выпал дубль. Число" + first + "<br>";
		if (first==1 || first==6) {
			resultText.innerHTML += "Две" + (first==1) ? "еденицы " : "шестерки ";
			resultText.innerHTML += "<br>";
		}
  	}
	total+=first+second;
}

resultText.innerHTML += "Сума" + total + "<br>";
resultText.innerHTML += (total>=100) ? "Победа, вы набрали" + total + "очков" : "Вы проиграли, у вас" + total + "очков" + "<br>";
