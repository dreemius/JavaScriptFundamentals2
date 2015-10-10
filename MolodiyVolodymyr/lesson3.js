// JavaScript Document
var first = Math.floor((Math.random() * 6) + 1); 
var second = Math.floor((Math.random() * 6) + 1); 
var total=0;

for(var i=0; i<15;i++){
	total+=first+second;
	
};
	
	if(first===1 && second===1){
		document.getElementById("result").innerHTML += "Две единицы <br>"
		}
	else if(first===6 && second===6){
		document.getElementById("result").innerHTML += "Две шестерки <br>"
		}
	else if (first===second ){
	document.getElementById("result").innerHTML += "Выпал дубль. Число" + " " +first	+ " <br> "
		}
		
	document.getElementById("result").innerHTML += "Первая кость:" + "  " + first + " <br> " + "Вторая кость:" +" "+ second + "<br>";
 
(total>100)? document.write("Победа, вы набрали"+"  " + total+"  " + "очков"):document.write("Вы проиграми, у вас" + "  "+total +"  "+  "очков");
	