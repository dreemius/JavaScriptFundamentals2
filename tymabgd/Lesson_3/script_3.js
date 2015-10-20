/*
"Две шестерки"
"Две единицы"
 */
for (var i = 1; i <= 15; i++){
    var first = Math.floor((Math.random() * 6) + 1);
    var second = Math.floor((Math.random() * 6) + 1);
        document.getElementById("result").innerHTML += "Первая кость: " + first + " Вторая кость: " + second + "<br>";
            if (first == second) {
                document.getElementById("result").innerHTML += "Выпал дубль. Число:" + first + "<br>";
            }
}