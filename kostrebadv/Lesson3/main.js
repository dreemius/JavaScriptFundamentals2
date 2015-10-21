var total = 0;
for (var i = 0; i < 15; ++i){

    var first = Math.floor((Math.random() * 6) +1);
    var second = Math.floor((Math.random() * 6) +1);

    if (first == 6 && second == 6) {





            var d = document.createElement('div');
            d.id='circle';
            document.body.appendChild(d);
            var draw = SVG('circle').size(50, 50);
            var circle = draw.circle(10).fill('#f09');






            var r = document.createElement('div');
            r.id='rect';
            document.body.appendChild(r);
            var draw = SVG('rect').size(50, 50);
            var rect = draw.rect(30, 30).attr({ fill: 'yellowgreen', rx: '5px'});


        document.getElementById('result').innerHTML += "Две шестерки " + '<br>';




    }
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






