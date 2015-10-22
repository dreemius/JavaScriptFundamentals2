function getRndNumber(){
    return	Math.floor((Math.random() * 6) + 1); 
	}
function doubleChecker(firstNum,secondNum){
	if (firstNum===secondNum ){
	 document.getElementById("result").innerHTML +=  "Выпал дубль. Число" +"  "+  firstNum+"<br>";
	if(firstNum===secondNum &&(firstNum===1 || firstNum===6))	 
	document.getElementById("result").innerHTML +=  "Две" +"  "+ firstNum+"<br>";
		}
	}
function printStr(strParam1,strParam2){
	document.getElementById("result").innerHTML +="Первая кость:" +"  "+ strParam1+"  " + "Вторая кость:"+"  "+ strParam2 + "<br>";
	}
function printTotal(textParam){
(textParam>100)?document.getElementById("result").innerHTML +="Победа, вы набрали" +"  "+ textParam +"  "+ "очков<br>":document.getElementById("result").innerHTML +="Вы проиграми, у вас"+ "  "+textParam + "  "+ "очков.<br>"
    }
function run(){
  var total=0;
  for(var i=0;i<15;i++){
	var first=getRndNumber();
	var second=getRndNumber();
	total+=first+second;
	 printStr(first,second);
	 doubleChecker(first,second);
	 }
	 printTotal(total);
	}
run();




	