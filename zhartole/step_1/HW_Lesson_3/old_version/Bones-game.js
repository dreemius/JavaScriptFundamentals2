/**
 * Today we would be try to create mini-game "Dices";
 */

//Next we create function for run Dice(Bones)-game;


function letsStartPlayer() {
    var totalPlayer = 0,
        a = document.getElementById("result-details-player").innerHTML,
        b = document.getElementById("result-player").innerHTML,
        first,
        second;
    for (var shotsPlayer = 0; shotsPlayer < 15; shotsPlayer++) {
        first = Math.floor((Math.random() * 6) + 1);
        second = Math.floor((Math.random() * 6) + 1);
        a += "First dice: " + first + "  Second dice: " + second + "<br>";
        a += (first === second) ? "Double. Number " + first + "<br>" : "";
        if ((first === second) && (first == 1 || first == 6)) {
            a += (first == 1) ? "Two 1" + "<br>" : "Two 6" + "<br>";
        }
        totalPlayer += first + second;
        console.log(totalPlayer);
        document.getElementById("result-player").innerHTML += (totalPlayer >= 100) ? "<br>" + "You WIN! Your score is " + totalPlayer : "<br>" + "You LOSE! Your score is " + totalPlayer;
    }
        b += "<div class='result-player'>" + "<br>" + "Your score is " + totalPlayer + "</div>";

}

//Below we create function for login operation (prompt);

function nicknamePlayer1() {
    var Player_1 = prompt("Enter your login","Player 1");
    document.getElementById("Nickname_player-1").innerHTML += " " + Player_1 + "<br>";
}
function nicknamePlayer2() {
    var Player_2 = prompt("Enter your login","Player 2");
    document.getElementById("Nickname_player-2").innerHTML += " " + Player_2 + "<br>";

}