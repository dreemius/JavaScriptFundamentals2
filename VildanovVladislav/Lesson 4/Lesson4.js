var total=0;
run();

function run() {
	for (var i=0; i<15; i++) {
		var first = getRndNumber();
		var second = getRndNumber();
		showText("Первая кость:" + first + " Вторая кость:" + second);
		showText("<br>")
		checkSpecific(first, second);
		total+=first+second;
	}
	printTotal();
}

function getRndNumber() {
	return Math.floor((Math.random() * 6) + 1); 
}
function showText(text) {
	return document.getElementById("result").innerHTML+= text;
}
function checkSpecific(first, second) {
	if (first==second){
		document.getElementById("result").innerHTML += "Выпал дубль. Число" + first + "<br>";
		 if (first==1 || first==6) {
		 	document.getElementById("result").innerHTML += (first==1) ? "Две еденицы" + "<br>" : "Две шестерки" + "<br>";
		 }
	} 
}
function printTotal() {
	document.getElementById("result").innerHTML += (total>=100) ? "Победа, вы набрали" + total + "очков" : "Вы проиграли, у вас" + total + "очков" + "<br>";
}