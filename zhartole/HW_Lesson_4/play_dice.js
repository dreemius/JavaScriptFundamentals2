/**Created by zhartole on 20.10.2015
 * Here we would be tray optimize our code by using more function**/

function letStartGame() {
var total = 0;
function getRndNumber() {
	return Math.floor((Math.random() * 6) + 1);
}
	for (var shots = 0; shots < 15; shots++) {
	var first = getRndNumber(),
	    second = getRndNumber(),
	    result = document.getElementById("result-player");
    function viewNormResult(first_dice, second_dice) {
		return "First dice: " + first_dice + " Second dice: " + second_dice + "<br>";
	}
	result.innerHTML += viewNormResult(first, second);
	function viewDouble(first_dice, second_dice){
		if (first_dice == second_dice && first_dice == 1) {
			return '<div class="double">Two 1' + '<br></div>';
		} else if (first_dice == second_dice && first_dice ==6) {
			return '<div class="double">Two 6' + '<br></div>';
		} else if (first_dice == second_dice) {
			return '<div class="double">Double. Number ' + first_dice + '<br></div>';
		}
		else {
			return "";
		}
}
	result.innerHTML += viewDouble(first, second);
	function viewResult(first_total, second_total) {
		return first_total+second_total;
	}
	total += viewResult(first, second);
}
	result.innerHTML += (total >= 100) ? '<div class="winner"><br>' + "You WIN!<hr> You are lucky<br> Your score is " + total + '<br><p>TRY AGAIN !</p></div>':
	'<br><div class="result-player">' + "You LOSE!<hr> Your score is " + total +'<br>Don`t be sad<br><p>You can TRY AGAIN !</p></div>';

}