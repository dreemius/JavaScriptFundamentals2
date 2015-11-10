var start = 5, 
    end = 10,
    elementShow = 5,
	newArray = [];
	newArray = data.filter(function(item,index){
		return (item.id >=start && item.id<=end);
	});
	

	function nameObj(name){
		return name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();
	};
	function descriptionObj(description){
		return description.slice(0, 15);
	};
	function dateObj(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           tmpDate.getMonth() + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
}
 	function changeArray(){
		for(var i = 0; i<newArray.length;i++){
			newArray[i].name = nameObj(newArray[i].name);
			newArray[i].description = descriptionObj(newArray[i].description);
			newArray[i].date = dateObj(newArray[i].date);
		};
	};	

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
	function printPhotos(){
		for (var j=0; j<elementShow;j++){
	resultHTML += itemTemplate
	.replace("$number", newArray[j].id)
	.replace(/\$name/gi, newArray[j].name)
	.replace("$url", newArray[j].url)
	.replace("$description",newArray[j].description)
	.replace("$date", newArray[j].date);	
	}
	return resultContainer.html(resultHTML);
}

function init(){
	changeArray();
	printPhotos();
};
init();

