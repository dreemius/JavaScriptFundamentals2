/*
"Две шестерки"
"Две единицы"
 */
var total = 0;

for (var i = 1; i <= 15; i++){
    var first = Math.floor((Math.random() * 6) + 1),
        second = Math.floor((Math.random() * 6) + 1),
        temp;

    document.getElementById("result").innerHTML += "Первая кость: " + first + " Вторая кость: " + second + "<br>";

    if (first == second && (first == 1 || second == 6) ) {
        temp = first;
        document.getElementById("result").innerHTML += "Выпал дубль. Число: " + temp + "<br>";
    }

    total += first + second;
}
(total > 100) ? document.getElementById("result").innerHTML += "Победа, вы набрали " + total + " очков."
               :document.getElementById("result").innerHTML += "Вы проиграми, у вас " + total + " очков.";