	var	total = 0;
	for(var i = 0; i<15; i++){
		var first = Math.floor((Math.random() * 6) + 1);
		var second = Math.floor((Math.random() * 6) + 1);
		document.getElementById("result").innerHTML +="Первая кость: " + first +" Вторая кость: "+second+"<br>";
		total += first + second;
		if (first==second){
			document.getElementById("result").innerHTML +="Випал дубль. Число "+first+"<br>";
			if (first == 1 || first == 6){
				document.getElementById("result").innerHTML +="Две "+(first == 1 ? "единицы <br>" : "шестерки <br>");
			}
		}
	}
	document.getElementById("result").innerHTML +=( (total > 100) ? ("Победа, вы набрали "+total+" очков <br>") : ("Вы проиграли, у вас "+total+" очков <br>"));