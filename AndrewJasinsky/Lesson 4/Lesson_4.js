function game() {
	//global variables
     var request = prompt("Enter the number of shots :", 15),
        total = 0,
        shoots = 0;
     var CONSTANT = 6.65*request;

	//functions
	function getRndNumber() {
		return Math.floor((Math.random() * 6) + 1);
	}
	
	function printText() {
		return document.getElementById("result").innerHTML+=arguments[0];
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
		printText("LET'S START THE GAME:" + "<br>" + "<br>");
		for (shoots; shoots < request; shoots++) {
        	var firstBone = getRndNumber();
            	secondBone = getRndNumber(),
				total+= firstBone + secondBone;
			printValueBone(firstBone,secondBone);
			checkEquality(firstBone,secondBone);
    	}

	//total value
		(function calculateTotalValue() {
			printText((total>CONSTANT) ? "<hr>" + "LUCKY! YOU WIN! YOU SCORED " + total + " POINTS" + "<hr>": "<hr>" + "YOU LOOSE! YOU SCORED ONLY " + total + " POINTS" + "<hr>");
		})();
	})();
}
  