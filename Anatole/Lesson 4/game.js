  //The game that generate two random numbers and print them.
  (function run() {
      var total = 0;
      for (var i = 1; i <= 15; i++) {
          var number1 = getRndNumber1(),number2 = getRndNumber2();
          outputText(number1,number2);
          specOutput(number1,number2);
          total += number1 + number2;
      }
      totalOutput(total);
  })();

  function getRndNumber1() {
      var first = Math.floor((Math.random() * 6) + 1);
      return first;
  }
  function getRndNumber2(){
       var second = Math.floor((Math.random() * 6) + 1);
       return second;
  }
  function outputText(text1, text2){
      return document.getElementById("result").innerHTML += "First bone: " + text1 + "  Second bone: " + text2 + "<br>";
  }
  function specOutput(num1,num2){
      if(num1 === num2) {
          var result = document.getElementById("result").innerHTML += "<span>" + "It's two number: " + num1 + "<sppan>" + "<br>";
      }
      return result;
  }
  function totalOutput(param){

      var final = param >= 100 ? "<p>" + " You win :) your score is :" + param + "</p>" : "<p>" + "You lose :( your score is: " + param + "</p>";
      return document.getElementById("result").innerHTML += final ;
  }
  // start main function.
