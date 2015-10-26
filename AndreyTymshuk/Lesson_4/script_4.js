/**
 * Created by AndreyTymshuk on 10/26/2015.
 */


function getRndNumber(){
    return Math.floor((Math.random() * 6) + 1);
}

function getRndElement(one, two){
    return document.getElementById("result").innerHTML += "Первая кость: " + one + " Вторая кость: " + two + "<br>";
}

function youWin(sum){
    return document.getElementById("result").innerHTML += "Победа, Вы набрали " + sum + " очков.";
}

function youLose(sum){
    return document.getElementById("result").innerHTML += "Вы проиграли, у Вас " + sum + " очков.";
}

function dobleClic(sum){
    return  document.getElementById("result").innerHTML += "Выпал дубль. Число: " + sum + "<br>";;
}

function total(one, two){
    return one + two;
}
var total =0;

for (var i= 1; i <= 15; i++){

    var first = getRndNumber(),
        second = getRndNumber();

    getRndElement(first, second);

    if ( (first == second) && (first == 1 || second == 6)){
        dobleClic(first);
    }

    total += first + second;
}

(total > 100) ? youWin(total) : youLose(total);