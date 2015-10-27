  //The game that generate two random numbers and print them.
  (function run() {
      var total = 0;
      for (var i = 1; i <= 15; i++) {
          var number1 = getRndNumber(),number2 = getRndNumber();
          outputText(number1,number2);
          specOutput(number1,number2);
          total += number1 + number2;
      }
      totalOutput(total);
  })();

  function getRndNumber() {
      return Math.floor((Math.random() * 6) + 1);
  }
  function print(){
      return document.getElementById("result");
  }
  function outputText(text1, text2){
       print().innerHTML += "First bone: " + text1 + "  Second bone: " + text2 + "<br>";
  }
  // Is it ok ?
  function specOutput(num1,num2) {
      if(num1 === num2) {
          print().innerHTML += "<span class='double'>" + "It's Double: " + num1 + "</span>" + "<br>";
             if(num1 === 1){
              print().innerHTML += "<span>" + "Two numbers one" + "</span>" + "<br>";
             }else if(num1 === 6){
              print().innerHTML += "<span>" + "Two numbers six" + "</span>" + "<br>";
             }
      }
  }
  function totalOutput(param){

      var final = param >= 100 ? "<p>" + " You win :) your score is :" + param + "</p>" : "<p>" + "You lose :( your score is: " + param + "</p>";
      print().innerHTML += final ;
  }

