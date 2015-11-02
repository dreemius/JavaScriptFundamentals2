var START = 4;
var END = 9;

var TOTAL_ELEM = 3;


var sliceFrom = --START;



function dateFormat (date){
	var newDate = new Date (date);
	return 	newDate.getFullYear() + '/' +
		newDate.getMonth() + '/' +
		newDate.getDate() + ' ' +
		newDate.getHours() + ' : ' +
		newDate.getMinutes();

};

function cutName (arg) {
	return arg[0].toLocaleUpperCase()+arg.slice(1).toLocaleLowerCase();

};


function cutDescription (str){
	return str.slice(0,15)
}

function transformData  (){
	return data.slice(sliceFrom, END).slice(0,TOTAL_ELEM);
}

function newDiv() {

	for (var i = 0; i < transformData(); i++ ) {

		var innerContainer = createNewElement('div')
			innerContainer.className = "col-sm-3 col-xs-6";

		var img = createNewElement('img');
		img.src = data[i].url;
		img.alt = cutName(data[i].name);
		img.className = "img-thumbnail";

		var infoWrapper = createNewElement('div');
		infoWrapper.className('info-wrapper');

		var idName = createNewElement('div');
		idName.className = 'text-muted';
		idName.innerHTML = data.id + ':' + cutName(data[i].name);

		var descrption = createNewElement('div');
		descrption.className = 'text-muted';
		descrption.innerHTML = cutDescription(data[i].description)

		var date = createNewElement('div');
		date.className = 'text-muted';
		date.innerHTML = ' Дата: ' + dateFormat(data[i].date);

		var result = document.getElementById('result');

		result.appendChild(innerContainer);
		innerContainer.appendChild(img);
		innerContainer.appendChild(infoWrapper);
		infoWrapper.appendChild(idName);
		infoWrapper.appendChild(descrption);
		infoWrapper.appendChild(date);

		}
}
newDiv();




/*


 var innertHtml = '<div class="col-sm-3 col-xs-6">\
 <img src="$url" alt="$name" class="img-thumbnail">\
 <div class="info-wrapper">\
 <div class="text-muted">$id: $name</div>\
 <div class="text-muted">$description</div>\
 <div class="text-muted">Дата: $date</div>\
 </div>\
 </div>';

transformData().forEach(function(item) {



			resultHTML += innertHtml
				.replace('$url', item.url)
				.replace('$id', item.id)
				.replace(/\$name/gi, cutName(item.name))
				.replace('$description', cutDescription(item.description))
				.replace('$date', dateFormat(item.date))


	}
);

document.getElementById("result").innerHTML += resultHTML;




*/