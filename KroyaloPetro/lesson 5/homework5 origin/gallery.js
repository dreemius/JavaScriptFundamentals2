run();
function run(){
	var MAX_DISPLAY		  	   = data.length,
		START_P			  	   = 0,
		END_P			  	   = 9,
		COUNT_IN_LINE	  	   = 4;
	var resultContainer   	   = document.getElementById('container');
	var resultHTML 		  	   = '';
	var itemTemplate      	   = '<div class="col-sm-3 col-xs-6">\
								<img src="$url" alt="$name" class="img-thumbnail">\
								<div class="info-wrapper">\
									<div class="text-muted">$number: $name</div>\
									<div class="text-muted">$description</div>\
									<div class="text-muted">$date</div>\
								</div>\
							</div>';
	var dataNew			  	   = cutData(data, START_P, END_P, MAX_DISPLAY);
	if (dataNew.length){
		dataNew.forEach(function (item, index){
			resultHTML		  += replaceItemTemplate(itemTemplate, item);
			if (isComplitFormDivRow(index, COUNT_IN_LINE)){
				printInHTML(resultContainer, '<div class="row">'+resultHTML+'</div>');
				resultHTML	   = "";
			}
		});
		if(resultHTML){printInHTML(resultContainer, '<div class="row">'+resultHTML+'</div>');}
			
	}else {
		alert("ERROR 1 : Dont have images to print");
	}
}
function printInHTML(resultContainer, stringToHTML){
	resultContainer.innerHTML += stringToHTML;
}
function isComplitFormDivRow(number, COUNT_IN_LINE){
	return ((++number) % COUNT_IN_LINE) == 0;
}
function cutData(data, start, end, MAX_DISPLAY){
	return data.slice(start,++end).slice(0,MAX_DISPLAY);
}
function replaceItemTemplate(itemTemplate, item){
	return itemTemplate
			.replace("$number", item.id)
			.replace(/\$name/gi, correctName(item.name))
			.replace("$url", item.url)
			.replace("$description", cutDescription(item.description))
			.replace("$date", formateDate(new Date(item.date)));
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