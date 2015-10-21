/**Created by zhartole on 20.10.2015
 * Here we would be tray to debug our code
 * What i do:
 * 1. Rename all function, variable etc. by "Standart";
 * 2. Delete player #2, because i dont have normal (such that would meet use strict) idea to compare result players;
 * 3. Delete code of drop-down list because its was not usability like for me;
 * 4. Delete code for login to player because i delete player#2;
 * 5. Create new class in style_dice.css to do this game more visibility;
 * 6. Optimize HTML code.
 * **/

function letStartGame() {
var total = 0;
	for (var shots = 0; shots < 15; shots++) {
	var first = Math.floor((Math.random() * 6) + 1),
	    second = Math.floor((Math.random() * 6) + 1),
	    result = document.getElementById("result-player");
    result.innerHTML += "First dice: " + first + " Second dice: " + second + "<br>";
	result.innerHTML += (first == second && first == 1 || first ==6)? (first == 1 ? '<div class="double">Two 1' + '<br></div>': '<div class="double">Two 6' + '<br></div>'):"";
	result.innerHTML += first == second ? '<div class="double">Double' + '<br></div>':"";
	total += first + second;
}
	result.innerHTML += (total >= 100) ? '<div class="winner"><br>' + "You WIN!<hr> You are lucky<br> Your score is " + total + '<br><p>TRY AGAIN !</p></div>':
	'<br><div class="result-player">' + "You LOSE!<hr> Your score is " + total +'<br>Don`t be sad<br><p>You can TRY AGAIN !</p></div>';
}