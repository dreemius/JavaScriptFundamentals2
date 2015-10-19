var total = 0;
run();

function run() {
	for (var i = 0; i < 15; i++) {
		var first = getRndNumber();
		var second = getRndNumber();
		total += first + second;
		printText("Первая кость:" + first + " Вторая кость:" + second);
		printText(first == second ? " Выпал дубль. Число " + first : "<br>");
		specificPrint(first, second);
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
	if ((first == second) && (first == 1 || first == 6)) {
		printText(" Две " + (first == 6 ? " шестерки<br>" : " единицы<br>"));
	} else if (first == second) {
		printText("<br>");
	}
}

function printTotal() {
	printText(total > 100 ? "Победа, вы набрали " + total + " очков" : "Вы проиграми, у вас " + total + " очков");
}