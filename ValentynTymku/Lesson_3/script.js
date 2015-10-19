var total = 0;

for (var i = 0; i < 15; i++) {
	var first = Math.floor((Math.random() * 6) + 1); 
	var second = Math.floor((Math.random() * 6) + 1);
	total += first + second;
	document.getElementById("result").innerHTML += "Первая кость:" + first + " Вторая кость:" + second;

	if (first == second) {
		document.getElementById("result").innerHTML += " Выпал дубль. Число "+ first;
		if (first == 1 || first == 6) {
			document.getElementById("result").innerHTML += " Две " + (first == 6 ? "шестерки" : "единицы");
		};
	}

	document.getElementById("result").innerHTML += "<br>"
};

document.getElementById("result").innerHTML += total > 100 ? "Победа, вы набрали " + total + " очков" : "Вы проиграми, у вас " + total + " очков";