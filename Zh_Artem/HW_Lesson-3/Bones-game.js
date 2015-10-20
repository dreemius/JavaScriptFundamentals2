/**
 * Today we would be try to create mini-game "Dices";
 */

//Below we create function for login operation (prompt);

function Nickname_Player_1() {
    var Player_1 = prompt("Enter your login","Player 1");
    document.getElementById("Nickname_player-1").innerHTML += " " + Player_1 + "<br>";
}
function Nickname_Player_2() {
    var Player_2 = prompt("Enter your login","Player 2");
    document.getElementById("Nickname_player-2").innerHTML += " " + Player_2 + "<br>";

}

//Next we create function for run Dice(Bones)-game;

//Player_1;
var first;
var second;

function Lets_Start_Player_1() {
    var total_Player_1 = 0; //for calculate player score;
    var shots_Player_1; //shots = 15;
    for (shots_Player_1 = 0; shots_Player_1 < 15; shots_Player_1++) {
        var first = Math.floor((Math.random() * 6) + 1);//random number for dice1;
        var second = Math.floor((Math.random() * 6) + 1);//random number for dice1;
        document.getElementById("Result-details_Player-1").innerHTML += "First dice: " + first + "  Second dice: "
            + second + "<br>";//result;
        document.getElementById("Result-details_Player-1").innerHTML += (first === second) ? "Double. Number " + first
        + "<br>" : "";//when player have double;
        if ((first === second) && (first == 1 || first == 6)) {
            document.getElementById("Result-details_Player-1").innerHTML += (first == 1) ? "Two 1" + "<br>" : "Two 6"
            + "<br>";//when player have double 6 or 1 dice;
        }
        total_Player_1 += first + second;//player1 score;

    }
    document.getElementById("Result_Player_1").innerHTML += "<div class='Result_Player'>" + "<br>" + "Your score is "
        + total_Player_1 + "</div>";//show player score;
}
//ctrl+c => ctrl+v Lets_Start_Player_1();

function Lets_Start_Player_2() {
    var total_Player_1 = 0;//create this variable because we have problem with comparison total_Player_1 || total_Player_1;
    // Need help for this;
    var total_Player_2 = 0;
    var shots_Player_2;

    for (shots_Player_2 = 0; shots_Player_2 < 15; shots_Player_2++) {
        var first_Player_2 = Math.floor((Math.random() * 6) + 1);
        var second_Player_2 = Math.floor((Math.random() * 6) + 1);

        document.getElementById("Result-details_Player-2").innerHTML += "First dice: " + first_Player_2 +
            "  Second dice: "
            + second_Player_2 + "<br>";
        document.getElementById("Result-details_Player-2").innerHTML += (first_Player_2 === second_Player_2) ?
        "Double. Number " + first_Player_2
        + "<br>" : "";
        if ((first_Player_2 === second_Player_2) && (first_Player_2 == 1 || first_Player_2 == 6)) {
            document.getElementById("Result-details_Player-2").innerHTML += (first_Player_2 == 1) ? "Two 1" + "<br>" :
            "Two 6"
            + "<br>";
        }
        total_Player_2 += first_Player_2 + second_Player_2;

    }
//Have a problem with comparison; total_player_1 "didnt exist"; maybe this is because we create var on function,
// but if i create var total_player_1 outside function than numbers not random and ===;
    if (total_Player_1 > total_Player_2) {
        document.getElementById("Result_Player_1").innerHTML += '<div class="Winner_Player">' + "<br>" +
            "You are lucky. <br> Your score is " + total_Player_1 + "<br>"
            + "You win in this battle" + "</div>";
        document.getElementById("Result_Player_2").innerHTML += "<br>" + "Your score is " + "<br>" + total_Player_2;
    } else {
        document.getElementById("Result_Player_2").innerHTML += '<div class="Winner_Player">' + "<br>" +
            "You are lucky. <br> Your score is " + total_Player_2 + "<br>"
            + "You win in this battle" + "</div>";
    }
}


//Below we create function for drop-down menu. This part of script for the text decoration;

var drop_down;
function hidetxt(type) {
    param=document.getElementById(type);
    if(param.style.display == "none") {
        if(drop_down) drop_down.style.display = "none";
        param.style.display = "block";
        drop_down = param;
    }

}