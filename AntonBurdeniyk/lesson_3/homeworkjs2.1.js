var total = 0;
var i = 0;
var outInner = document.getElementById("result");
    for(i = 0; i < 15; i++){
		var first = Math.floor((Math.random() * 6) + 1); 
        var second = Math.floor((Math.random() * 6) + 1);
		outInner.innerHTML += "Первая кость:" + first + "Вторая кость:" + second + "<br>";   

		if(first == second){
			outInner.innerHTML += "Выпал дубль." + first + "<br>";
			if(first == 1 || first == 6){
				outInner.innerHTML +="Две "+(first == 1 ? "единицы" : "шестерки");
				outInner.innerHTML +="<br>";
			}
		} 
			total += first + second;	
			
	};	
	    outInner.innerHTML += total > 100 ? outInner.innerHTML = "Победа, вы набрали " + total + "очков" + "<br>" : outInner.innerHTML = "Вы проиграли, у вас" + total + "очков" + "<br>";