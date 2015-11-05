/* Created by AndreyTymshuk(tymabgd)
   rev.0 - 21/10/2015,
   rev.1 - 01/11/2015,
   rev.2 - 05/11/2015
 */
var total = 0;

//Цыкл
for (var i = 1; i <= 15; i++) {
    var first = Math.floor((Math.random() * 6) + 1),
        second = Math.floor((Math.random() * 6) + 1);

    //Вывожу числа костей
    document.getElementById("result").innerHTML += "Первая кость: " + first + " Вторая кость: " + second + "<br>";

    //Проверяю условие на дубль
    if (first == second) {
        document.getElementById("result").innerHTML += "Выпал дубль. Число: " + first + "<br>";
        //Проверяю дубль на 1
        if (first == 1) {
            document.getElementById("result").innerHTML += " Две единицы" + "<br>";
        }
        //Проверяю дубль на 6
        if (first == 6) {
            document.getElementById("result").innerHTML += " Две шестерки" + "<br>";
        }
    }
    //Суммирую все числа
    total += first + second;
}
// Проверяю или выиграл
(total > 100) ? document.getElementById("result").innerHTML += "Победа, вы набрали " + total + " очков."
               :document.getElementById("result").innerHTML += "Вы проиграми, у вас " + total + " очков.";