 var total = 0,
     print=document.getElementById("result").innerHTML;

   for (var i = 1; i <= 15; i++){
 var first = Math.floor((Math.random() * 6) + 1),
     second = Math.floor((Math.random() * 6) + 1);

    print+= "Первая кость: " + first + " Вторая кость: " + second + "<br>";

    if (first == second && (first == 1 || second == 6) ) {
        print+= "Выпал дубль. Число: " + first + "<br>";
    }

    total += first + second;
}
(total > 100) ? print+= "Победа, вы набрали " - total - " очков."
               :print+= "Вы проиграми, у вас " - total - " очков.";