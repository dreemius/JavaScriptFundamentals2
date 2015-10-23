function game() {

    var request = prompt("Enter the number of shots :", 15),
        total = 0,
        shoots = 0,
        printHtml = document.getElementById("result");
    var CONSTANT = 6.65*request;

    printHtml.innerHTML += "LET'S START THE GAME:" + "<br>" + "<br>";
    for (shoots; shoots < request; shoots++) {
        var first = Math.floor((Math.random() * 6) + 1),
            second = Math.floor((Math.random() * 6) + 1);

				   
	    //printHtml.innerHTML += "FIRST BONE: " + first + " | " + "SECOND BONE: " + second + "<br>";
        
		if (first == 1) {
            printHtml.innerHTML += "<div>" + "FIRST BONE: " + "<img src='images/numberOne.png' class='diceNumberOne'" + "</div>";
        }
		if (first == 2) {
            printHtml.innerHTML += "<div>" + "FIRST BONE: " + "<img src='images/numberTwo.png' class='diceNumberOne'" + "</div>";
        }
		if (first == 3) {
            printHtml.innerHTML += "<div>" + "FIRST BONE: "+"<img src='images/numberThree.png' class='diceNumberOne'" + "</div>";
        }
		if (first == 4) {
            printHtml.innerHTML += "<div>" + "FIRST BONE: "+"<img src='images/numberFour.png' class='diceNumberOne'" + "</div>";
        }
		if (first == 5) {
            printHtml.innerHTML += "<div>" + "FIRST BONE: "+"<img src='images/numberFive.png' class='diceNumberOne'" + "</div>";
        }
		if (first == 6) {
            printHtml.innerHTML += "<div>" + "FIRST BONE: "+"<img src='images/numberSix.png' class='diceNumberOne'" + "</div>";
        }



        if (second == 1) {
            printHtml.innerHTML += "<div>" + "SECOND BONE: "+"<img src='images/numberOne.png' class='diceNumberOne'" + "</div>";
        }
		
		if (second == 2) {
            printHtml.innerHTML += "<div>" + "SECOND BONE: "+"<img src='images/numberTwo.png' class='diceNumberOne'" + "</div>";
        }
		if (second == 3) {
            printHtml.innerHTML += "<div>" + "SECOND BONE: "+"<img src='images/numberThree.png' class='diceNumberOne'" + "</div>";
        }
		if (second == 4) {
            printHtml.innerHTML += "<div>" + "SECOND BONE: "+"<img src='images/numberFour.png' class='diceNumberOne'" + "</div>";
        }
		if (second == 5) {
            printHtml.innerHTML += "<div>" + "SECOND BONE: "+"<img src='images/numberFive.png' class='diceNumberOne'" + "</div>";
        }
		if (second == 6) {
            printHtml.innerHTML += "<div>" + "SECOND BONE: "+"<img src='images/numberSix.png' class='diceNumberOne'" + "</div>";
        }
		
		if(first == second ) {
            printHtml.innerHTML +="DOUBLE &#8658 " + first + "<br>" + "<br>";
             if(first==1||first==6) {
                 printHtml.innerHTML +="DROPPED DOUBLE " + (first==1?"ONE":"SIX") + "<hr>" + "<br>";
            }
        
		  			
		}
        total+=first+second;
    }
    printHtml.innerHTML +="<hr>";
    printHtml.innerHTML += (total>CONSTANT) ? "LUCKY! YOU WIN! YOU SCORED " + total + " POINTS": "YOU LOOSE! YOU SCORED ONLY " + total + " POINTS";
    printHtml.innerHTML +="<hr>";
   }

// "<div>" + "<img src='images/numberOne.png' class='diceNumberOne'" + "</div>"