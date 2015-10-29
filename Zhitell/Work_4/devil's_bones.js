var total = 0;

function randomNumber(){
	 return Math.floor((Math.random() * 6) + 1);	
}

function print(msg){
	document.getElementById("result").innerHTML += msg;
}

function output(count){
	print (' Всего: <span class="total">' + total + '</span>');
	var score = (total > 100) ? "<div class='score win'>Победа, вы набрали " + total + " очков</div>" : "<div class='score lose'>Вы проиграли, у вас " + total + " очков</div>";
	print (score);
}
	

function run(){
	for (var i=0; i<15; i++){
		var first = randomNumber();	
		var second = randomNumber();
		print ("Первая кость: <span class='number'>" + first + "</span> &nbsp;&nbsp;Вторая кость: <span class='number'>" + second + '</span></br>');
		if (first == second){
			print ("Выпал дубль:  <span class='number'>" + first +'</span></br>');
			if (first == 1 && second == 1){
			print ("<span class='number'>Две единицы </span></br>");
			}
			if (first == 6 && second == 6){
			print ("<span class='number'>Две шестерки </span></br>");
			}
		}
		var total = total + first + second;
	}
	output(total)
}

run();

/*

document.getElementById("result").innerHTML += "Первая кость: <span class='number'>" + first + "</span> &nbsp;&nbsp;Вторая кость: <span class='number'>" + second + '</span></br>';
	
	
document.getElementById("result").innerHTML += txt;	

document.getElementById("result").innerHTML += ' Всего: <span class="total">' + total + '</span>';

var score = (total > 100) ? "<div class='score win'>Победа, вы набрали " + total + " очков</div>" : "<div class='score lose'>Вы проиграли, у вас " + total + " очков</div>";

document.getElementById("result").innerHTML += score;


	function totalScore(first, second){
	randomNumber(first, second);
var total = total + first + second;
document.getElementById("result").innerHTML = total;
}

totalScore();


if (first == second){
	switch(first, second) {
    case 1,1:
        txt = "<span class='number'>Две единицы </span></br>";
        break;
    case 6,6:
        txt = "<span class='number'>Две шестерки </span></br>";
        break;
	default:
		txt = "Выпал дубль:  <span class='number'>" + first +'</span></br>';
	}
	return txt;
}

*/




