function game() {

    var CONSTANT = 6.65;
    var request = prompt("Enter the number of shots :", 15),
        total = 0,
        shoots = 0,
        printHtml = document.getElementById("result");

    printHtml.innerHTML += "LET'S START THE GAME:" + "<br>" + "<br>";
    for (shoots; shoots < request; shoots++) {
        var first = Math.floor((Math.random() * 6) + 1),
            second = Math.floor((Math.random() * 6) + 1);
        printHtml.innerHTML += "FIRST BONE: " + first + " | " + "SECOND BONE " + second + "<br>";
        if(first == second ) {
            printHtml.innerHTML +="DOUBLE = " + first + "<br>" + "<br>";
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