var 
i=1; 
total=0;
first=0;
second=0;
function getRndNumber()
{
	first = Math.floor((Math.random() * 6) + 1); 
	second = Math.floor((Math.random() * 6) + 1); 
}
function print(str)
{
	document.getElementById("result").innerHTML +=str;
}
function special(first,second)
{
	if (first == second)
	print("Выпал дубль: <b>" + first + "</b><br>");
	if (first==1 && second==1)
	print ("<i>Две единицы</i><br>");
	if (first==6 && second==6)
	print("<i>Две шестерки</i><br>");	
}
function totalCount(first,second)
{
	total=total+first+second;
}
function totalPrint(total)
{
document.getElementById("result").innerHTML += "<br><b>Ваш результат: " + total + "</b><br>";
document.getElementById("result").innerHTML += total > 100 ? "Победа, вы набрали " + total + " очков" : "Вы проиграми, у вас " + total + " очков";
}
function run()
{
for (i=1; i<=15; i++)
{
	getRndNumber();
	print("Первая кость: " + first + "; Вторая кость: " + second + "<br>");
	special(first,second);
	totalCount(first,second);
}
}
run();
totalPrint(total);

/*
function getRndNumber()
{
	return Math.floor((Math.random() * 6) + 1); 
}
first= getRndNumber; ???
*/
