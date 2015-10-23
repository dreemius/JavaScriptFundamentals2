/**Created by zhartole on 20.10.2015
 * Here we would be tray optimize our code by using more function**/

function letStartGame() {
var total = 0;
function getRndNumber() {
	return Math.floor((Math.random() * 6) + 1);
}
	for (var shots = 0; shots < 15; shots++) {
	var first = getRndNumber(),
	    second = getRndNumber();

	printResult(viewResult(first, second));
	total += calculateTotal(first, second);
}
	printResult(viewTotal(total));
}
function viewResult(first_dice, second_dice){
	 return (first_dice == second_dice && first_dice == 1 || first_dice ==6)? (first_dice == 1 ? '<div class="double">Two 1' + '<br></div>': '<div class="double">Two 6' + '<br></div>'): (first_dice == second_dice ? '<div class="double">Double ' + first_dice + '<br></div>' :
	"First Dice  " + first_dice + "Second Dice " + second_dice + "<br>");
}
function calculateTotal(first_total, second_total) {
	return first_total+second_total;
}
function viewTotal(show_total) {
	return show_total >= 100 ?  '<div class="winner"><br>' + "You WIN!<hr> You are lucky<br> Your score is " + show_total + '<br><p>TRY AGAIN !</p></div>' :
	'<br><div class="result-player">' + "You LOSE!<hr> Your score is " + show_total +'<br>Don`t be sad<br><p>You can TRY AGAIN !</p></div>';
}
function printResult(result){
	return document.getElementById("result-player").innerHTML += result;
}