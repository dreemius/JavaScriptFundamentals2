function game() {

    var request = prompt("Enter the number of shots :", 15);
    var total = 0;
    var shoots;


    document.getElementById("result").innerHTML += "LET'S START THE GAME:" + "<br>" + "<br>";

    for (shoots = 0; shoots < request; shoots++) {
        var first = Math.floor((Math.random() * 6) + 1);
        var second = Math.floor((Math.random() * 6) + 1);

        document.getElementById("result").innerHTML += "FIRST BONE: " + first + " | " + "SECOND BONE " + second + "<br>";

        if(first == second ) {
            document.getElementById("result").innerHTML +="DOUBLE = " + first + "<br>" + "<br>";

            // remove unnecessary code
          //case with switch
          /*  switch (first) {
                case 1:
                    document.getElementById("result").innerHTML +="DROPPED DOUBLE ONE" + "<hr>"+ "<br>";
                    break;
                case 6:
                    document.getElementById("result").innerHTML +="DROPPED DOUBLE SIX" + "<hr>" + "<br>";
                    break;
            }*/
            //case with if
            if(first==1||first==6) {
                document.getElementById("result").innerHTML +="DROPPED DOUBLE " + (first==1?"ONE":"SIX") + "<hr>" + "<br>";
            }
        }
        total+=first+second;
    }
    document.getElementById("result").innerHTML +="<hr>";

    // move 6.65 to constant
    document.getElementById("result").innerHTML +=(total>(request*6.65)) ? "LUCKY! YOU WIN! YOU SCORED " + total + " POINTS": "YOU LOOSE! YOU SCORED ONLY " + total + " POINTS";
    document.getElementById("result").innerHTML +="<hr>"

}