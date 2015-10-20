var total = 0;
var i;
for (i=0; i<15; i++){
	var first = Math.floor((Math.random() * 6) + 1);	
	var second = Math.floor((Math.random() * 6) + 1);
	document.getElementById("result").innerHTML += "Первая кость: <span class='number'>" + first + "</span> &nbsp;&nbsp;Вторая кость: <span class='number'>" + second + '</span></br>';
	
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
	document.getElementById("result").innerHTML += txt;
	}
		
	var total = total + first + second;
	}

document.getElementById("result").innerHTML += ' Всего: <span class="total">' + total + '</span>';

var score = (total > 100) ? "<div class='score win'>Победа, вы набрали " + total + " очков</div>" : "<div class='score lose'>Вы проиграли, у вас " + total + " очков</div>";

document.getElementById("result").innerHTML += score;




