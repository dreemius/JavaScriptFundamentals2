var 
i=1; 
total=0;

for (i=1; i<=15; i++)
{
	var first = Math.floor((Math.random() * 6) + 1); 
	var second = Math.floor((Math.random() * 6) + 1);
	document.getElementById("result").innerHTML += "Первая кость: " + first + "; Вторая кость: " + second + "<br>";
	if (first == second)
	document.getElementById("result").innerHTML += "Выпал дубль: <b>" + first + "</b><br>"
	if (first==1 && second==1)
	document.getElementById("result").innerHTML += "<i>Две единицы</i><br>";
	if (first==6 && second==6)
	document.getElementById("result").innerHTML += "<i>Две шестерки</i><br>";
	total=total+first+second;
}

document.getElementById("result").innerHTML += "<br><b>Ваш результат: " + total + "</b><br>";

if (total<100)
document.getElementById("result").innerHTML += "К сожалению Вы проиграли :(";
else
document.getElementById("result").innerHTML += "Вы выиграли!!! Поздравляем!";