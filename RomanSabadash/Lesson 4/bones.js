var total = 0,
	element = document.getElementById("result");

run();

function run() {
	for (var i = 0; i < 15; i++) {
		var first = getRndNumber(),
			second = getRndNumber();

		printResult("First bone: " + first + "  Second bone: " + second + "<br>");
		printResult((first === second) ? "Double. Number " + first + "<br>" : "");

		printSpecResult(first, second);
	
		total += first + second;
	}

		printTotal();
}

function getRndNumber() {
	return Math.floor((Math.random() * 6) + 1);
}

function printResult(param) {
	return element.innerHTML += param;
}

function printSpecResult(first, second) {
	if ((first === second) && (first == 1 || first == 6)) {
		return element.innerHTML += (first == 1) ? "Two 1" + "<br>" : "Two 6" + "<br>";
	}
}

function printTotal() {
	return element.innerHTML += (total >= 100) ? "<br>" + "You WIN! Your score is " + total : "<br>" + "You LOSE! Your score is " + total;
}