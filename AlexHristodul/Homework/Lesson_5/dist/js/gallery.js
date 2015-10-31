var maxPoint=10;

var filterByConfig = function () {
	var filtredData = [];
    for (var key in data){
        var countNum = data[key].id;

        if(countNum <= maxPoint){
            filtredData.push(data[key]);
        }
    }
	return filtredData;
};

var newName = function(oldName){
   return oldName[0].toLocaleUpperCase()+oldName.slice(1).toLocaleLowerCase();
};

var newDescr = function(descr){
    return descr.slice(0,15);
};

var newDate = function(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           tmpDate.getMonth() + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
};

var output = function(filtredData){
   var tmpResult;
    for (var key in filtredData){
        tmpResult =  '<div class="col-sm-3 col-xs-6">\
				<img src="'+ filtredData[key].url + '" alt="'+ newName(filtredData[key].name) + '" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">'+ filtredData[key].id + ' '+ newName(filtredData[key].name) + '</div>\
					<div class="text-muted">'+ newDescr(filtredData[key].description) + '</div>\
					<div class="text-muted">'+ newDate(filtredData[key].date) + '</div>\
				</div>\
			</div>';
        document.getElementById("result").innerHTML += tmpResult;
    }

} ;

var init = function() {
	var filtered = filterByConfig();
	output(filtered);
};

init();
