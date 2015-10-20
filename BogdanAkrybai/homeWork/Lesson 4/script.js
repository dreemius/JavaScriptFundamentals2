var total = 0;
run();

function run() {

	for (var i = 1; i <= 15; i++) {

		var firstDice = getRndNumber();
    	var secondDice = getRndNumber();
    	total += firstDice + secondDice;
    	printText("Первая кость : " + firstDice + " Вторая кость : " + secondDice);
    	outputSpecResult(firstDice, secondDice);
    }
    printTotal();
}

function getRndNumber() {
	return Math.floor((Math.random() * 6) + 1);
}

function printText(outputText) {
	if (outputText) {
	document.getElementById("result").innerHTML += outputText + "<br>";
	}
}

function outputSpecResult(firstDice, secondDice) {
	if (firstDice == secondDice) {
		printText(firstDice == secondDice ? " Выпал дубль. Число " + firstDice : "<br>");
		if (firstDice == 6 || firstDice == 1)
			printText(firstDice == 6 ? "Две шестерки" : "Две еденицы");
	}
}

function printTotal() {
	printText(total > 100 ? "Победа, вы набрали " + total + " очков" : "Вы проиграли, у вас " + total + " очков");
}