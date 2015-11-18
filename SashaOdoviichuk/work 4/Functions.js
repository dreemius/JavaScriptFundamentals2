var totalSum = 0;
function getRndNumber() {
    return Math.floor((Math.random() * 6) + 1);
}
function printMsg(id, str) {
    document.getElementById(id).innerHTML = str;
}
function handleSpecialResult(diceFirst) {
    var markUp = ": two"
    switch (diceFirst) {
        case 1:
            markUp += " units";

            break;
        case 6:
            markUp += " sixes";

            break;
        default:
            markUp = "";

           break;
    }
    return markUp;
}
function composeMsg() {
    var diceFirst,
        diceSecond,
        markUp = "";

    for (var i = 1; i <= 15; i++) {
        diceFirst = getRndNumber();
        diceSecond = getRndNumber();
        totalSum += diceFirst + diceSecond;
        markUp += "<strong>First bone:</strong> = <i>" + diceFirst + "</i><strong> Second bone:</strong> = <i>" + diceSecond + "</i>";
        if (diceFirst == diceSecond) {
            markUp += " - Fell double" + handleSpecialResult(diceFirst);
        }
        markUp += "<br>";
    }

   markUp+= total();
    return markUp;
}
function total() {
    var markUp = "";

    markUp += "Total = " + totalSum + "<br>";
    markUp += totalSum > 100 ? "You won" + "<br>" : "Try again ^^";
    return markUp;
}
function run() {
    totalSum = 0;
    printMsg("result", composeMsg());

    document.getElementById("result").style.display = "block";
}


