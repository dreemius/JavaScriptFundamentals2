var total = 0;
	
  printOutText("<h2>START</h2>");
  
/*сделать get функции для генераторов чисел (getRndNumber)*/  
function getRndNumber() {
	return Math.floor((Math.random() * 6) + 1);
}
/* сделать одну функцию которая будет печатать строки. Ей надо будет передавать текст как параметр. */
function printOutText(text) {
	document.getElementById("result").innerHTML += text;
}
/* создать главную run() функцию в которой будет выполняться основной код (цикл) */
function run(){
    for(var i=0;i<=15;i++){
        var first = getRndNumber();
        var second = getRndNumber();
		printOutText("Первая кость:" + first + " Вторая кость:" + second);
		printOutText(printSpecificResults(first,second));
		printOutText("<br>");
        total+=first+second;
      
}
printOutTotal(total);
}
run();
/*сделать функцию для вывода специфических результатов (совпадения 1==1, 2==2,.... 6==6). Она будет проверять все условия и выводить данные.*/
function printSpecificResults(numb1,numb2) {
	if(numb1==numb2){
		return " - [Выпал дубль. Число " + numb1 +"]";
	if(numb1==1 || numb1==6){
	return ((numb1==1 ? " - Две единицы": " - Две шестерки"));
	
	} 
	}
}
/*сделать функцию для вывода результата total.*/
function printOutTotal(total) {
	printOutText((total>=100) ? "<br>" + "Победа, вы набрали " + total + " очков!" : "<br>" + "Вы проиграли,  вы набрали " + total + " очков!");
}
