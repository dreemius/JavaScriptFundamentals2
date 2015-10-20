	var	total = 0,
		out   = document.getElementById("result"),
		xNum  = 6,
		yNum  = 1;
	function run(){
		var first,
			second;
		for(var i = 0; i<15; i++){
			first  = getRndNumber(xNum, yNum);
			second = getRndNumber(xNum, yNum);
			printStr("Первая кость: " + first +" Вторая кость: "+second+"<br>");
			total += first + second;
			lookWhatIHave(first,second);
		}
		getResult(total);
	}
	function getRndNumber(x,y){
		return Math.floor((Math.random() * x) + y);
	}	
	function printStr(textForPrint){
		out.innerHTML += textForPrint;
	}
	function lookWhatIHave(uno, dos){
		if (uno==dos){
			printStr("Випал дубль. Число "+uno+"<br>");
			if (uno == 1 || uno == 6){
				printStr("Две "+(uno == 1 ? "единицы" : "шестерки"));
				printStr("<br>");
			}
		}
	}
	function getResult(sum){
		printStr("<hr><br><hr>"+( (sum > 100) ? ("Победа, вы набрали ") : ("Вы проиграли, у вас")) + sum+" очков <br><hr>");
	}
	run();