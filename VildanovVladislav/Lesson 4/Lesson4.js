run();

function run() {
	var total=0;
	for (var i=0; i<15; i++) {
		var first = getRndNumber();
		var second = getRndNumber();
		showText("Первая кость:" + first + " Вторая кость:" + second);
		showText("<br>")
		checkSpecific(first, second);
		total+=first+second;
	}
	printTotal(total);
}

function getRndNumber() {
	return Math.floor((Math.random() * 6) + 1); 
}
function showText(text) {
	document.getElementById("result").innerHTML+= text;
}
function checkSpecific(first, second) {
	if (first==second){
		showText("Выпал дубль. Число" + first + "<br>");
		 if (first==1 || first==6) {
		 	showText((first==1) ? "Две еденицы" + "<br>" : "Две шестерки" + "<br>");
		 }
	} 
}
function printTotal(sum) {
	showText((sum>=100) ? "Победа, вы набрали" + sum + "очков" : "Вы проиграли, у вас" + sum + "очков" + "<br>");
}