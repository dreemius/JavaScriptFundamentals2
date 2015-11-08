 var total = 0,
     print=document.getElementById("result");
	 function getRndNumber(){
              return Math.floor((Math.random() * 6) + 1);
            }
	 function printText(first,second){
	          return  first==second ? print.innerHTML+= "Первая кость: " + first + " Вторая кость: " + second + "<br>"+"Выпал дубль =)" + "<br>":print.innerHTML+="Первая кость: " + first + " Вторая кость: " + second + "<br>";			  
			}
     function printSpecialResult(first,second){
        if (first == second && (first == 1 || second == 6) ) 
              return print.innerHTML+= "Число: " + first + "<br>";
            }
     function calcTotalSum (total){
			  return (total > 100) ? print.innerHTML+= "Победа, вы набрали " + total + " очков."
                                    :print.innerHTML+= "Вы проиграли, у вас " + total + " очков."; 
            }			
     function run(){
        for (var i = 1; i <= 15; i++){
             var first = getRndNumber(),
                 second = getRndNumber();
	         printText(first,second);
		     printSpecialResult(first,second);
		     total += first + second;
        }
		     calcTotalSum (total);    	
        }
  run();