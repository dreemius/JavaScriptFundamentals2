function myFunction() {
var total = 0;
var i;
for (i = 0; i < 15; i++) {
	var first = Math.floor((Math.random() * 6) + 1); 
	var second = Math.floor((Math.random() * 6) + 1);
	document.getElementById("result").innerHTML += "First bone: " + first + "  Second bone: " + second + "<br>";

	document.getElementById("result").innerHTML += (first === second) ? "Double. Number " + first + "<br>" : "";

	if ((first === second) && (first == 1 || first == 6)) {
		document.getElementById("result").innerHTML += (first == 1) ? "Two 1" + "<br>" : "Two 6" + "<br>";
	}
	
	total += first + second;
}

	document.getElementById("result").innerHTML += (total >= 100) ? "<br>" + "You WIN! Your score is " + total : "<br>" + "You LOSE! Your score is " + total;
}