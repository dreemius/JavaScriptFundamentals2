	run();
	function run(){
		var total   		  = 0,
			maxCountOfDice    = 6, 
			COUNT_DROPED_DICE = 1,
			first,
			second,
			textOut 		  = "";
		for(var i = 0; i<15; i++){
			first    = getRndNumber(maxCountOfDice, COUNT_DROPED_DICE);
			second   = getRndNumber(maxCountOfDice, COUNT_DROPED_DICE);
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