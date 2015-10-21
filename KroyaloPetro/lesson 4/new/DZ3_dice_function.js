	function run(){
		var total   = 0,
			xNum    = 6,
			yNum    = 1,
			first,
			second,
			textOut ="";
		for(var i = 0; i<15; i++){
			first    = getRndNumber(xNum, yNum);
			second   = getRndNumber(xNum, yNum);
			textOut += ("Первая кость: " + first +" Вторая кость: "+second+"<br>");
			total   += first + second;
			textOut += lookWhatIHave(first,second);
		}
		textOut += getResult(total);
		printStr(textOut, "result");
		printStr("DO IT AGAIN","button1");
	}
	function getRndNumber(x,y){
		return Math.floor((Math.random() * x) + y);
	}	
	function lookWhatIHave(uno, dos){
		var buff="";
		if (uno==dos){
			buff += ("Випал дубль. Число "+uno+"<br>");
			if (uno == 1 || uno == 6){
				buff += ("Две "+(uno == 1 ? "единицы" : "шестерки"))+"<br>";
			}
		}
		return buff;
	}
	function getResult(sum){
		var buff = "<hr><br><hr>",
			buff1 = "";
		if (sum > 100){
			buff1 = '<image src="image/victory.jpg">';
			buff += "Победа, вы набрали ";
		}
		else{
			buff1 = '<image src="image/game_over.jpg">';
			buff += "Вы проиграли, у вас";
		}
		printStr(buff1,"finish");
		return buff + sum+" очков <br><hr>";
	}
	function printStr(textForPrint, resorse){
		document.getElementById(resorse).innerHTML = textForPrint;
	}