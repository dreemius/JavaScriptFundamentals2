var total = 0;
run();

function run() {
	for (var i = 0; i < 15; i++) {
		var first = getRndNumber();
		var second = getRndNumber();
		total += first + second;
		printText("Первая кость:" + first + " Вторая кость:" + second);
		specificPrint(first, second);
		printText("<br>");
	}
	printTotal();
}

function getRndNumber() {
	return Math.floor((Math.random() * 6) + 1);
}

function printText(textForPrint) {
	if (textForPrint) {
		document.getElementById("result").innerHTML += textForPrint;
	}
}

function specificPrint(first, second) {
	if (first == second) {
		document.getElementById("result").innerHTML += " Выпал дубль. Число "+ first;
		if (first == 1 || first == 6) {
			document.getElementById("result").innerHTML += " Две " + (first == 6 ? "шестерки" : "единицы");
		};
	}
}

function printTotal() {
	printText(total > 100 ? "Победа, вы набрали " + total + " очков" : "Вы проиграми, у вас " + total + " очков");
}