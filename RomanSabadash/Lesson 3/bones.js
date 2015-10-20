var total = 0,
	get = document.getElementById("result"),
	i;

for (i = 0; i < 15; i++) {
	var first = Math.floor((Math.random() * 6) + 1); 
	var second = Math.floor((Math.random() * 6) + 1);
	get.innerHTML += "First bone: " + first + "  Second bone: " + second + "<br>";

	get.innerHTML += (first === second) ? "Double. Number " + first + "<br>" : "";

	if ((first === second) && (first == 1 || first == 6)) {
		get.innerHTML += (first == 1) ? "Two 1" + "<br>" : "Two 6" + "<br>";
	}

	total += first + second;
}
	
get.innerHTML += (total >= 100) ? "<br>" + "You WIN! Your score is " + total : "<br>" + "You LOSE! Your score is " + total;