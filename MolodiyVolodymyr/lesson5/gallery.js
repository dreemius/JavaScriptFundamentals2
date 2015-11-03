var START_POSITION=5;
var FINISH_POSITION=12;
var ITEMS_QUANTITY=6;

var newData=data.slice(START_POSITION,FINISH_POSITION).slice(0,ITEMS_QUANTITY);
	
var newDate = function(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           tmpDate.getMonth() + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
};

function cutDescription(descript){
	 var cutRes;
	 cutRes=descript.substr(0,15);
	 return cutRes;
	 }  
	
function firstLetterUpper(str){
 var capitalizRes;
 capitalizRes=str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
	  
	 return capitalizRes;
    
	}

function changeData(obj){
 for(var i=0; i<obj.length; i++){
	 obj[i].name=firstLetterUpper(obj[i].name);
	 obj[i].description=cutDescription(obj[i].description);
	 obj[i].date=newDate(obj[i].date);
	 }
	 return obj;
}

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

function printResult(arrObj){
	for (var j=0; j<arrObj.length;j++){
	resultHTML += itemTemplate
	.replace("$number", arrObj[j].id)
	.replace(/\$name/gi, arrObj[j].name)
	.replace("$url", arrObj[j].url)
	.replace("$description",arrObj[j].description)
	.replace("$date", arrObj[j].date);	
	}
	return resultContainer.html(resultHTML);
}

function initMainFun(arOb){
changeData(arOb);
printResult(arOb);
return arOb;	
} 

initMainFun(newData);