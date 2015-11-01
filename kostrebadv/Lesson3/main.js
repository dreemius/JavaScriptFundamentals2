var total = 0;
for (var i = 0; i < 15; ++i){

    var first = Math.floor((Math.random() * 6) +1);
    var second = Math.floor((Math.random() * 6) +1);


        else if (first == 1 && second == 1){

        document.getElementById ('result').innerHTML += "Две еденицы " + '<br>';

    }

        else  if(first == second)
    {

        document.getElementById('result').innerHTML += "Выпал дубль " + first + '<br>';

    }

    else {document.getElementById ('result').innerHTML += "Первая кость: " + first + " Вторая кость: " + second + '<br>';}


    total += first + second;

}


document.getElementById("result").innerHTML += "<br>Ваш результат: " + total + "<br>";
(total >= 100)? document.getElementById ('result').innerHTML += "Вы выграли ":document.getElementById ('result').innerHTML += "Вы проиграли ";






