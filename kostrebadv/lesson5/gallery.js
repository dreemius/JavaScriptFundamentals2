var START = 2;
var END = 9;


var sliceFrom = --START;

var resultHTML = '';

var innertHtml = '<div class="col-sm-3 col-xs-6">\
			<img src="$url" alt="$name" class="img-thumbnail">\
			<div class="info-wrapper">\
			<div class="text-muted">$id: $name</div>\
			<div class="text-muted">$description</div>\
			<div class="text-muted">Дата: $date</div>\
			</div>\
			</div>';

var dateFormat = function  (date){
	var newDate = new Date (date);
	return 	newDate.getFullYear() + '/' +
		newDate.getMonth() + '/' +
		newDate.getDate() + ' ' +
		newDate.getHours() + ' : ' +
		newDate.getMinutes();

};

var cutName = function (name) {
	return name[0].toLocaleUpperCase()+name.slice(1).toLocaleLowerCase();

};

var newItemID = function (id){


}

var cutDescription = function (str){
	return str.slice(0,15)
}


data.slice(sliceFrom, END).forEach(function(item, index){

         resultHTML += innertHtml
             .replace('$url', item.url)
             .replace('$id',item.id)
             .replace(/\$name/gi, cutName(item.name))
             .replace('$description', cutDescription(item.description))
             .replace('$date', dateFormat(item.date))


}
);

document.getElementById("result").innerHTML += resultHTML;



