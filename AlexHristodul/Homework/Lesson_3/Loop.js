var totalSum = 0;
var i;

document.getElementById("result").innerHTML += "<h3>START</h3>";

for (i=0;i<15;i++) {
	
	var first = Math.floor ((Math.random() * 6) + 1);
	var second = Math.floor ((Math.random() * 6) + 1);
	
	document.getElementById("result").innerHTML += "First bones: - " + first + " <b>|</b>" + " Second bones: - " + second + "<br>";
	document.getElementById("result").innerHTML += first == second ? "Rolls doubles. Number - " + first + "<br>" : "<br>";
	
	if ((first == second) && (first == 6 || first == 1)) {
		document.getElementById("result").innerHTML += first == 6 ? "-Two sixes-" + "<br>" : "-Two units-" + "<br>";
	}
	
	totalSum += first + second;
}
document.getElementById("result").innerHTML += "<br>";
document.getElementById("result").innerHTML += totalSum < 100 ? "<b>You LOSE - :(<br>Your result is: </b>" + totalSum + ".": "<b>You WIN - :)<br>Your result is: </b>" + totalSum + ".";