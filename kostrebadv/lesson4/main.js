var
    total=0,
    first=0,
    second=0;

function run (){

    for (var i=0; i<5; ++i){


        text("Первая кость: " + first + "; Вторая кость: " + second + "<br>");
        specialNum();
        getRndNumber();
    }

    result();


}

function getRndNumber()
{
     first = Math.floor((Math.random() * 6) + 1);
     second = Math.floor((Math.random() * 6) + 1);
}

function text(string){

    document.getElementById("result").innerHTML += string;

}

function specialNum (){

    (first == second) ? text("Дубль " + first + '<br>' ) : '';
    (first == second == 1) ? text("Две еденици"+ '<br>') : '';
    (first == second == 6) ? text("Две шестерки" + '<br>') : '';

}

function result(){

    total += first + second;
    (total>100) ? text("Вы набрали " + total + ' Вы победили.') : text ('Вы проиграли. Ваш результат ' + total);

}

run();


