run();
function run(){
	var resultHTML 		= '<div class="starter-template">\
			<h1>JS Fundamentals first demo page</h1>\
			<p class="lead">Simple galley builder</p>\
		</div>';
	var buffHTML		= "";
	var itemTemplate    = '<div class="col-sm-3 col-xs-6">\
				<img src="$url" alt="$name" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">$number: $name</div>\
					<div class="text-muted">$description</div>\
					<div class="text-muted">$date</div>\
				</div>\
			</div>';
	var MAX_DISPLAY		= data.length,
		START_P			= 0,
		END_P			= data.length,
		buffForDivRow	= 0;
	(MAX_DISPLAY < (END_P-START_P)) ? END_P = START_P + MAX_DISPLAY : NaN;
	data.slice(START_P,END_P).forEach(function (item, index){
		if (isAvailableRange(index, START_P, END_P)){
			buffHTML += itemTemplate
				.replace("$number", item.id)
				.replace(/\$name/gi, correctName(item.name))
				.replace("$url", item.url)
				.replace("$description", cutDescription(item.description))
				.replace("$date", formateDate(new Date(item.date)));
			buffForDivRow++;
			if (isPrint(buffForDivRow, index, START_P, END_P)){
				buffForDivRow 	= 0;
				resultHTML	   += '<div class="row">'+buffHTML+'</div>';
				buffHTML	  	= "";
			}
		}
	});
	printInHTML('<div>'+resultHTML+'</div>')
}
function printInHTML(stringToHTML){
	var resultContainer = $('#container');
	resultContainer.html(stringToHTML);
}
function isPrint(buffForDivRow, index, START_P, END_P){
	return ((buffForDivRow == 4)||((index+1) == (END_P-START_P)))
}
function isAvailableRange(index, START_P, END_P){
	return (index < (END_P - START_P))
}
function correctName(name){
	return name[0].toLocaleUpperCase()+name.slice(1).toLocaleLowerCase();
}
function cutDescription(description){
	return description.slice(0,15);
}
function formateDate(date){
	return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()+' '+date.getHours()+':'+date.getMinutes();
}