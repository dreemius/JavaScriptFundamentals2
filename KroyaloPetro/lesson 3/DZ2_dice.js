	var	total = 0,
		out = document.getElementById("result");
	for(var i = 0; i<15; i++){
		var first = Math.floor((Math.random() * 6) + 1);
		var second = Math.floor((Math.random() * 6) + 1);
		out.innerHTML +="Первая кость: " + first +" Вторая кость: "+second+"<br>";
		total += first + second;
		if (first==second){
			out.innerHTML +="Випал дубль. Число "+first+"<br>";
			if (first == 1 || first == 6){
				out.innerHTML +="Две "+(first == 1 ? "единицы" : "шестерки");
				out.innerHTML +="<br>";
			}
		}
	}
	out.innerHTML += "<hr><br><hr>"+( (total > 100) ? ("Победа, вы набрали ") : ("Вы проиграли, у вас")) + total+" очков <br><hr>";