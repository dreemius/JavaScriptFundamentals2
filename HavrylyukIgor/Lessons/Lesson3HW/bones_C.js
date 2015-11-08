 var total = 0,
     print=document.getElementById("result");

   for (var i = 1; i <= 15; i++){
 var first = Math.floor((Math.random() * 6) + 1),
     second = Math.floor((Math.random() * 6) + 1);
    first== second ? print.innerHTML+= "Первая кость: " + first + " Вторая кость: " + second+ "<br>"+"Выпал дубль =)" + "<br>":print.innerHTML+= "Первая кость: " + first + " Вторая кость: " + second+ "<br>";

    if (first == second && (first == 1 || second == 6) ) {
        print.innerHTML+= " Число: " + first + "<br>";
    }

    total += first + second;
}
(total > 100) ? print.innerHTML+= "Победа, вы набрали " + total + " очков."
               :print.innerHTML+= "Вы проиграми, у вас " + total + " очков.";