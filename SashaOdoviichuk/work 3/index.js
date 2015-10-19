//function Startgame()
// {
    var Total = 0;
    var markUp ="";
    var firstDice;
    var secondDice;
        
	markUp += "LET'S START THE GAME:" + "<br>" + "<br>";

            for (var Shoots = 1; Shoots <= 15; Shoots++) {
                firstDice = Math.floor((Math.random() * 6) + 1);
    		    secondDice = Math.floor((Math.random() * 6) + 1);
                Total += firstDice + secondDice;
                markUp += "<b>FIRST BONE:</b> = " + firstDice + "<b> SECOND BONE:</b> = " + secondDice;

                    if(firstDice==secondDice) {
                            markUp += " - Dropped Double" + " ";

                                if(firstDice==1 || secondDice==6) {
                                  markUp += (firstDice==1 ? "Units": "Sixes");
                                }
                    }
                    markUp+="<br>";
            }

        markUp += '<em>Total Score = </em>' + Total + "<br>";
        Total > 100 ? markUp += "<em>You won</em>" + "<br>" : markUp += "<em>Try again ^^</em>";

    document.getElementById("result").innerHTML = markUp;