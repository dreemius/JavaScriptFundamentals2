run();
function run(){
    var i = 0;
	var total = 0;
	    for(i = 0; i < 15; i++){
			var first = getRndNumber();
			var second = getRndNumber();
			printText("Первая кость:" + first + "Вторая кость:" + second);
			printText("<br>");
			getSpecific(first, second);
			total += first + second;
		}
		printTotal(total);
}
function getRndNumber(){
	return Math.floor((Math.random() * 6) + 1);
}
function printText(print){
	document.getElementById("result").innerHTML += print;
}
function getSpecific(first, second){
	if (first==second){
		printText("Выпал дубль." + first + "<br>");
			if(first == 1 || first == 6){
				printText((first==1) ? "Две еденицы" + "<br>" : "Две шестерки" + "<br>");
			}
    }
}function printTotal(total){
	printText((total > 100) ?  "Победа, вы набрали " + total + "очков" + "<br>" : "Вы проиграли, у вас" + total + "очков" + "<br>");
}