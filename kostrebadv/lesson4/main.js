var total= 0,
    first,
    second;

run();

function run (){

    for (var i=0; i<5; ++i){
        first=getRndNumber();
        second=getRndNumber();
        text("Первая кость: " + first + "   Вторая кость: " + second + "<br>");
        specialNum();

    }

    result(getRndNumber(),getRndNumber());

}

function getRndNumber(){

  return Math.floor((Math.random() * 6) + 1);
}

function text(string){

    document.getElementById("result").innerHTML += string;

}

function specialNum (){

    (first == second) ? text("Дубль " + first + '<br>' ) : '';
    (first == second == 1) ? text("Две еденици"+ '<br>') : '';
    (first == second == 6) ? text("Две шестерки" + '<br>') : '';

}

function result(first,second){

    total += first + second;
    (total>100) ? text("Вы набрали " + total + ' Вы победили.') : text ('Вы проиграли. Ваш результат ' + total);

}




