	run();
	function run(){
		var total   = 0,
			xNum    = 6,
			yNum    = 1,
			first,
			second,
			textOut = "";
		for(var i = 0; i<15; i++){
			first    = getRndNumber(xNum, yNum);
			second   = getRndNumber(xNum, yNum);
			textOut += "Первая кость: " + first +" Вторая кость: "+second+"<br>";
			total   += first + second;
			textOut += lookWhatIHave(first,second);
		}
		printStr (textOut+getResult(total));
	}
	function getRndNumber(x,y){
		return Math.floor((Math.random() * x) + y);
	}	
	function printStr(textForPrint){
		document.getElementById("result").innerHTML += textForPrint;
	}
	function lookWhatIHave(uno, dos){
		var buff = "";
		if (uno==dos){
			buff += "Випал дубль. Число "+uno+"<br>";
			if (uno == 1 || uno == 6){
				buff += "Две "+(uno == 1 ? "единицы" : "шестерки") + "<br>";
			}
		}
		return buff;
	}
	function getResult(sum){
		return ("<hr><br><hr>"+( (sum > 100) ? ("Победа, вы набрали ") : ("Вы проиграли, у вас")) + sum+" очков <br><hr>");
	}