var	maxItem=data.length,
	startPos=3,
	finalPos=8;
	
function filter(){
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

function ArrCorrection () {
	for (var i = 0; i < data.length; i++) {
		data[i].name = data[i].name[0].toUpperCase()+data[i].name.slice(1).toLowerCase();
		data[i].description = data[i].description.slice(0,15);
		data[i].date=new Date(data[i].date).getFullYear()+"/"+new Date(data[i].date).getMonth()+"/"+new Date(data[i].date).getDate()+" "+new Date(data[i].date).getHours()+":"+new Date(data[i].date).getMinutes();
	}
}

function output()
{
	for (i = 0; i < data.length; i++) {
		var container = document.createElement('div');
		container.className = "col-sm-3 col-xs-6";

		var image = document.createElement('img');
		image.className = 'img-thumbnail';
		image.src = data[i].url;
		image.alt = data[i].name;

		var infTable = document.createElement('div');
		infTable.className = 'info-wrapper';

		var name = document.createElement('div');
		name.className = 'text-muted';
		name.innerHTML = data[i].name;

		var description = document.createElement('div');
		description.className='text-muted';
		description.innerHTML=data[i].description;

		var date = document.createElement('div');
		date.className='text-muted';
		date.innerHTML = data[i].date;


		var out = document.getElementById('result');

		out.appendChild(container)

		container.appendChild(image);
		container.appendChild(infTable);
		infTable.appendChild(name);
		infTable.appendChild(description);
		infTable.appendChild(date);


	}
}

filter();
ArrCorrection();
output();
