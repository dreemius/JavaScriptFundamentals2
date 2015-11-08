var resultContainer = $('#result');
var resultHTML = "";
var max_counter_display = data.length;
var start_p = 1;
var final_p = data.length;
var itemTemplate = '<div class="col-sm-3 col-xs-6">\
				<img src="$url" alt="$name" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">$number: $name</div>\
					<div class="text-muted">$description</div>\
					<div class="text-muted">$date</div>\
				</div>\
			</div>';
function CorrectTheName(name){
    return name[0].toLocaleUpperCase()+name.slice[1].toLocaleLowerCase();
};

function CutTheDiscription(str){
    return str.slice(0,15)
};
    
function FormatTheDate(correctdate){
    return correctdate.getFullYear()+'/'+correctdate.getMonth()+'/'+correctdate.getDate()+''+correctdate.getHours+':'+correctdate.getMinutes;
};

data.forEach(function(item, index){
if ((index < max_counter_display )&&(index >= start_p)&&(index < final_p)){
resultHTML += itemTemplate
	.replace("$number", item.id)
	.replace(/\$name/gi, CorrectTheName(item.name))
	.replace("$url", item.url)
	.replace("$description", CutTheDiscription(item.description))
	.replace("$date", FormatTheDate(new Date(item.date)));
}
});				
resultContainer.html(resultHTML);		
			