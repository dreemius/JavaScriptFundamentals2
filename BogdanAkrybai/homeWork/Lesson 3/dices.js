var total = 0;

for (var i = 1; i <= 15; i++) {

	var firstDice = Math.floor((Math.random() * 6) + 1); 
    var secondDice = Math.floor((Math.random() * 6) + 1);
    
    document.getElementById("result").innerHTML += "Первая кость : " + firstDice + " Вторая кость : " + secondDice + "<br>";
    document.getElementById("result").innerHTML += firstDice == secondDice ? " Выпал дубль. Число " + firstDice + "<br>" : "<br>";



    if ((firstDice == secondDice) && (firstDice == 6 || firstDice == 1)) {
		document.getElementById("result").innerHTML += firstDice == 6 ? "Две шестерки" + "<br>" : "Две еденицы" + "<br>";
	}

	total += firstDice + secondDice; 
};

document.getElementById("result").innerHTML += total > 100 ? "Победа, вы набрали " + total + " очков" : "Вы проиграми, у вас " + total + " очков";