function getRndNumber(){
	return Math.floor((Math.random() * 6) + 1);
}
function printMsg (str, id){
	document.getElementById(id).innerHTML = str;
}
function handleSpecialResult (diceFirst){
	var markUp;
	switch (diceFirst) {
            case 1:
                markUp = "<strong>First bone:</strong> = " + diceFirst + "<strong> Second bone:</strong> = " + diceFirst + " - Fell down - two units" + "<br>";

                break;
            case 6:
                markUp = "<strong>First bone:</strong> = " + diceFirst + "<strong> Second bone:</strong> = " + diceFirst + " - Fell down - two sixes" + "<br>";

                break;
            default:
                markUp = "<strong>First bone:</strong> = " + diceFirst + "<strong> Second bone:</strong> = " + diceFirst + " - Fell double" + "<br>";

                break;
        }
    return markUp;    
}
function run(){
	var diceFirst, 
		diceSecond,
		totalSum=0,
		markUp="";

	for (var i=1; i<=15; i++) {
		diceFirst = getRndNumber();
		diceSecond = getRndNumber();
		totalSum += diceFirst + diceSecond;
		if(diceFirst==diceSecond){
			markUp += handleSpecialResult(diceFirst);
		} else{
			 markUp += "<strong>First bone:</strong> = <i>" + diceFirst + "</i><strong> Second bone:</strong> = <i>" + diceSecond + "</i><br>";
		}

	}
	markUp += "Total = " + totalSum + "<br>";
	markUp += totalSum > 100 ? "You won" + "<br>" : "Try again ^^";	
	return markUp;
}
function total(){
	printMsg(run(), "result");
	document.getElementById("result").style.display="block";
}


