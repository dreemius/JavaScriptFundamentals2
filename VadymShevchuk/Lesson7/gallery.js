var	maxItem=10,
	startPos=3,
	finalPos=8;
k=0;

function filter(data){
	var j=0;
	while (j<startPos-1){
		data.shift();
		j++
	}
	j=maxItem;
	while (j>finalPos){
		data.pop();
		j--;
		maxItem=maxItem-1;
	}
}

function ArrCorrection (data) {
	for (var i = 0; i < data.length; i++) {
		data[i].name = data[i].name[0].toUpperCase()+data[i].name.slice(1).toLowerCase();
		data[i].description = data[i].description.slice(0,15);
		data[i].date=new Date(data[i].date).getFullYear()+"/"+new Date(data[i].date).getMonth()+"/"+new Date(data[i].date).getDate()+" "+new Date(data[i].date).getHours()+":"+new Date(data[i].date).getMinutes();
	}
}

function addItem(k) {
	var container = document.createElement('div');
	container.className = "col-sm-3 col-xs-6";

	var image = document.createElement('img');
	image.className = 'img-thumbnail';
	image.src = data[k].url;
	image.alt = data[k].name;

	var infTable = document.createElement('div');
	infTable.className = 'info-wrapper';

	var name = document.createElement('div');
	name.className = 'text-muted';
	name.innerHTML = data[k].id + ". " + data[k].name;

	var description = document.createElement('div');
	description.className = 'text-muted';
	description.innerHTML = data[k].description;

	var date = document.createElement('div');
	date.className = 'text-muted';
	date.innerHTML = data[k].date;

	var url = document.createElement('div');
	url.className = 'link';
	url.innerHTML = '<a href="#">delete</a>';

	var out = document.getElementById('result');

	out.appendChild(container);

	container.appendChild(image);
	container.appendChild(infTable);
	infTable.appendChild(name);
	infTable.appendChild(description);
	infTable.appendChild(date);
	container.appendChild(url);
}


//filter(data);
ArrCorrection(data);
var btn1 = document.getElementById('btn1');
btn1.addEventListener("click",output);

var btn2 = document.getElementById('btn2');
btn2.addEventListener("click",output);

var btn3 = document.getElementById('btn3');
btn3.addEventListener("click",customOutput);

var edit1 = document.getElementById('exampleInputName2');
edit1.addEventListener("keyup", copyText);

var btn4 = document.getElementById('del');
btn4.addEventListener('click', textDel);

function copyText(event){
	document.getElementById('text').value = edit1.value;
}

function textDel(event){
	edit1.value = "";
	document.getElementById('text').value = "";
}

function customOutput(event){
	event.preventDefault();
	startPos=document.getElementById('from').value;
	finalPos=document.getElementById('to').value;
	if (finalPos>maxItem){
		alert("Out of quantity");
	}
	else {
		k = finalPos;
		filter(data);
		for (var i = 0; i < data.length; i++) {
			addItem(i);
		}
		document.getElementById("count").innerHTML ="Quantity: " + k;
	}
}

function output(event) {
	event.preventDefault();
	if (event.target.id == "btn1") {
		addItem(k);
		if (k <= data.length) {
			k++;
		}
	}
	if (event.target.id == "btn2") {
		var del = document.getElementsByName('container');
		del.removeChild(del.parentNode);

	}
	document.getElementById("count").innerHTML = "Quantity " + k;
}
function removeElement() {
	container.addEventListener('click', function (event) {
		if (event.target.tagName == 'a') {
			event.preventDefault();
			event.currentTarget.removeChild(event.target.parentNode);
			k--;
		}
		total.innerHTML = k;
	});
}
