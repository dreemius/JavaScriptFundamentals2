/* Created by AndreyTymshuk(tymabgd)
   rev.0 - 10/26/2015,
   rev.1 - 11/10/2015,
   rev.2 - 05/11/2015
 */
var total =0;

// Генератор случайных чисел
function getRndElement(){
    return Math.floor((Math.random() * 6) + 1);
}

// Вывод строки
function getIndex (text){
    return document.getElementById("result").innerHTML += text + "<br>";
}

//Цыкл
for (var i= 1; i <= 15; i++){
    var first = getRndElement(),
        second = getRndElement();

    //Вывод случайных чисел
    getIndex("Первая кость: " + first + " Вторая кость: " + second);

    //Проверка на дубль
    if (first == second) {
        getIndex("Выпал дубль. Число: " + first);
        //Проверка на 1
        if (first == 1) {
            getIndex(" Две единицы");
        }
        //Проверка на 6
        if (first == 6) {
            getIndex(" Две шестерки");
        }
    }
    //Суммирование всех чисел
    total += first + second;
}
//Проверяю на выиграш
(total > 100) ? getIndex("Победа, Вы набрали " + total) : getIndex("Вы проиграли, у Вас " + total);
