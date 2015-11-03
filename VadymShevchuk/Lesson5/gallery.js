var	maxItem=10,
	startPos=3,
	finalPos=8;
	
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

function output()
{
	var resultContainer = $('#result');
	var resultHTML = "";
	var itemTemplate = '<div class="col-sm-3 col-xs-6">\
						<img src="$url" alt="$name" class="img-thumbnail">\
					 <div class="info-wrapper">\
						<div class="text-muted">$number: $name</div>\
						<div class="text-muted">$description</div>\
						<div class="text-muted">$date</div>\
					</div>\
					</div>';

	for (i = 0; i < data.length; i++) {
		resultHTML += itemTemplate
			.replace("$number", data[i].id)
			.replace(/\$name/gi, data[i].name)
			.replace("$url", data[i].url)
			.replace("$description", data[i].description)
			.replace("$date", data[i].date);

		resultContainer.html(resultHTML);
	}
}

filter(data);
ArrCorrection(data);
output();
