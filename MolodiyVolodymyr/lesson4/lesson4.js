function getHtmlElement(arg){
	return document.getElementById("result").innerHTML+=arg;
	}
function getRndNumber(){
    return	Math.floor((Math.random() * 6) + 1); 
	}
function doubleChecker(firstNum,secondNum){
	if (firstNum===secondNum ){
	 getHtmlElement("Выпал дубль. Число" +"  "+  firstNum+"<br>");
	if(firstNum===secondNum &&(firstNum===1 || firstNum===6))	 
	 getHtmlElement( "Две" +"  "+ firstNum+"<br>");
		}
	}
function printStr(strParam1,strParam2){
	 getHtmlElement("Первая кость:" +"  "+ strParam1+"  " + "Вторая кость:"+"  "+ strParam2 + "<br>");
	}
function printTotal(textParam){
(textParam>100)?getHtmlElement("Победа, вы набрали" +"  "+ textParam +"  "+ "очков<br>"):getHtmlElement("Вы проиграми, у вас"+ "  "+textParam + "  "+ "очков.<br>")
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




	