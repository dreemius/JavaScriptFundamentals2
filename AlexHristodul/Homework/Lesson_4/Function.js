var totalSum = 0;
printInner("<h3>START</h3>");
run();

function run() {
	for (var i=0;i<15;i++) {
		var first = randomMath();
		var second = randomMath();
		printInner("First bones: - " + first + " <b>|</b>" + " Second bones: - " + second + "<br>");
		printInner(first == second ? "Rolls doubles. Number - " + first + "<br>" : "<br>");
		totalSum += first + second;
		doubleNum(first, second);
	}
	printInner("<br>");
	printTotalSum();
}

function randomMath() {
	return Math.floor((Math.random() * 6) + 1);
}

function printInner(textInner) {
	document.getElementById("result").innerHTML += (textInner);
}

function doubleNum(first, second) {
	if ((first == second) && (first == 6 || first == 1)) {
		printInner(first == 6 ? "-Two sixes-" + "<br>" : "-Two units-" + "<br>");
	}	
}

function printTotalSum() {
	printInner(totalSum < 100 ? "<b>You LOSE - :(<br>Your result is: </b>" + totalSum + ".": "<b>You WIN - :)<br>Your result is: </b>" + totalSum + ".");
}