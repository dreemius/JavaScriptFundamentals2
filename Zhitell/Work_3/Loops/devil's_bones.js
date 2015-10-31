var total = 0;
var i;
for (i=0; i<15; i++){
	var first = Math.floor((Math.random() * 6) + 1);	
	var second = Math.floor((Math.random() * 6) + 1);
	document.getElementById("result").innerHTML += "Первая кость: <span class='number'>" + first + "</span> &nbsp;&nbsp;Вторая кость: <span class='number'>" + second + '</span></br>';
	
	if (first == second){
			document.getElementById("result").innerHTML += "Выпал дубль:  <span class='number'>" + first +'</span></br>';
			if (first == 1 && second == 1){
			document.getElementById("result").innerHTML += "<span class='number'>Две единицы </span></br>";
			}
			if (first == 6 && second == 6){
			document.getElementById("result").innerHTML += "<span class='number'>Две шестерки </span></br>";
			}
		}
	
	var total = total + first + second;
	}

document.getElementById("result").innerHTML += ' Всего: <span class="total">' + total + '</span>';

var score = (total > 100) ? "<div class='score win'>Победа, вы набрали " + total + " очков</div>" : "<div class='score lose'>Вы проиграли, у вас " + total + " очков</div>";

document.getElementById("result").innerHTML += score;


/* case 1,1:
        txt = "<span class='number'>Две единицы </span></br>";
        break;
    case 6,6:
        txt = "<span class='number'>Две шестерки </span></br>";
        break;
	default: */



