// start for loop ,that count the numbers from 1 to 15
  var total = 0;
  for(var i = 1;i<=15;i++){

      //generate two random numbers
      var first = Math.floor((Math.random() * 6) + 1);
      var second = Math.floor((Math.random() * 6) + 1);

      // The output two numbers in div block
      document.getElementById("result").innerHTML += "First bone: " + first + "  Second bone: " + second + "<br>";
      ;

      // if numbers are equal show message and if numbers are equal "1 or 6" add new message.
      if(first == second){
          document.getElementById("result").innerHTML += "<br>" + "It is Double! " + first + " & " + second + "<br>" +
          "<br>";

          if((first && second) == 1){
             document.getElementById("result").innerHTML += "Two numbers: 1" + "<br>" +
                 "------------------------------------" + "<br>";
          }else if((first && second) == 6){
             document.getElementById("result").innerHTML += "Two numbers: 6" + "<br>" +
                 "------------------------------------" + "<br>";
          }
      }
      // counting sum of two numbers
      
      total += first + second;
}
  var endGame = total >= 100 ?  "<br>" + "************************" +  "<br>" + "You win \":)\" your score is :" +
    total : "<br>" + "************************" + "<br>" + "You lose \":(\" your score is :" + total;
    document.getElementById("result").innerHTML += endGame;