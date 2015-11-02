var total= 0,
    first,
    second;

run();

function run (){

    for (var i=0; i<15; i++){
        first=getRndNumber();
        second=getRndNumber();
        specialNum();
        total += first + second;
        text("Первая кость: " + first + "   Вторая кость: " + second + "<br>");

    }

    result();

}

function getRndNumber(){

    return Math.floor((Math.random() * 6) + 1);
}

function text(string){

    document.getElementById("result").innerHTML += string;

}

function specialNum (){

    if (first == second){
        text("Дубль " + '<strong>' + first + '</strong>' + ' ');
    }
        else if (first == 1 || second == 6){
            text("Две " + (first ==1 ? 'еденицы ' + first + ' : ' + first: 'шестерки ' + second + ' : ' + second));
            text('<br>')

    }



}

function result(){

    (total>100) ? text( '<br>' + "Вы набрали " + total + ' Вы победили.') : text ('<br>' + 'Вы проиграли. Ваш результат ' + total);

}




