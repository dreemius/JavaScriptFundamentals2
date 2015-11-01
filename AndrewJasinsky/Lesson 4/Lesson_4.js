function game() {
	//global variables
     var inputNumberOfShots = prompt("Enter the number of shots :", 15),
        total = 0,
        shoots = 0;
     var POINTS_FOR_WIN = 6.65*inputNumberOfShots; //Исходя из задания, за 15 бросков для победы надо набрать 100 очков.
											//Для одной попытки: 100/15 = 6.65(окугляем).

	//functions
	function getRndNumber() {
		return Math.floor((Math.random() * 6) + 1);
	}
	
	function printText() {
		return document.getElementById("result").innerHTML+=arguments[0];
	}

	function clearText() {
		return document.getElementById("result").innerHTML=arguments[0];
	}
	
	function printValueBone() {
		printText("FIRST BONE: " + arguments[0] + " | " + "SECOND BONE " + arguments[1] + "<br>");
	}
	
	function checkEquality() {
		if(arguments[0] == arguments[1]) {
		printText("DOUBLE " + arguments[1] + "<br>" + "<br>");
			if(arguments[0]==1||arguments[0]==6) {
				printText("DROPPED DOUBLE " + (arguments[0]==1?"ONE":"SIX") + "<hr>" + "<br>");
			}
		}
	}

	//start program
	
    (function run(){
		clearText(" ");
		printText("LET'S START THE GAME:" + "<br>" + "<br>");
		for (shoots; shoots < inputNumberOfShots; shoots++) {
        	var firstBone = getRndNumber();
            	secondBone = getRndNumber(),
				total+= firstBone + secondBone;
			printValueBone(firstBone,secondBone);
			checkEquality(firstBone,secondBone);
    	}

	//total value
		(function calculateTotalValue() {
			printText((total>POINTS_FOR_WIN) ? "<hr>" + "LUCKY! YOU WIN! YOU SCORED " + total + " POINTS" + "<hr>": "<hr>" + "YOU LOOSE! YOU SCORED ONLY " + total + " POINTS" + "<hr>");
		})();
	})();
}
  