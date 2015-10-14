var totalSum = 0;
var i = 0;

document.getElementById("result").innerHTML += "<h3>START</h3>";

for (i=0;i<15;i++) {
	
	var first = Math.floor ((Math.random() * 6) + 1);
	var second = Math.floor ((Math.random() * 6) + 1);
	
	document.getElementById("result").innerHTML += "First bones: - " + first + " Second bones: - " + second + "<br>";
	
	if (first == second) {
		document.getElementById("result").innerHTML += "Rolls doubles. Number - " + first + "<br>";
	}

	// move to first if and make it shorter
	if (first == 1 && second == 1) {
		document.getElementById("result").innerHTML += "<i>-Two units-</i><br>";
	}
	if (first == 6 && second == 6) {
		document.getElementById("result").innerHTML += "<i>-Two sixes-</i><br>";
	}
	totalSum += first + second;
}
document.getElementById("result").innerHTML += "<br>";
document.getElementById("result").innerHTML += totalSum < 100 ? "<b>You LOSE - :(<br>Your result is: </b>" + totalSum + ".": "<b>You WIN - :)<br>Your result is: </b>" + totalSum + ".";