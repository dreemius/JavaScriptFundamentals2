var sum = 0;

for (var i = 0; i < 15; i++) {
	var first = Math.floor((Math.random() * 6) + 1); 
	var second = Math.floor((Math.random() * 6) + 1);
	document.getElementById("result").innerHTML += "Первая кость: " + first + "   Вторая кость: " + second;
	document.getElementById("result").innerHTML += first == second ? " Выпал дубль. Число - "+ first : "<br>";

	if ((first == second) && (first == 1 || first == 6)) {
		document.getElementById("result").innerHTML += " - Две " + (first == 6 ? " шестёрки<br>" : " единицы<br>");
	} else if (first == second) {
		document.getElementById("result").innerHTML += "<br>";
	}

	sum += first + second;

};

document.getElementById("result").innerHTML += sum > 100 ? "Победа, вы набрали " + sum + " очков" : "Проигрыш, у вас " + sum + " очков";