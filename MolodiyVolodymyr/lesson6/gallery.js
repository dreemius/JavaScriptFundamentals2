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

				
function createTemp(tagName,clName,inHtml){
    var template=document.createElement(tagName);
    clName && (template.className=clName);
    inHtml && (template.innerHTML=inHtml);
    return template;
    }
function createImg(clName,source){
	var tempImg=document.createElement('img')
	clName && (tempImg.className=clName);
	source && (tempImg.src=source);
	return tempImg;
	}

function printResult(arrObj){
  var result=document.getElementById('result');
  for (var j=0; j<arrObj.length;j++){
    var col=createTemp('div','col-sm-3 col-xs-6');
    var wrappper=createTemp('div','info-wrapper');
    var carId= createTemp('div','text-muted',arrObj[j].id);
    var carName= createTemp('div','text-muted',arrObj[j].name);
    var carImg= createImg('img-thumbnail',arrObj[j].url);
    var carDescription= createTemp('div','text-muted',arrObj[j].description);	
    var carDate= createTemp('div','text-muted',arrObj[j].date);
        var res=+  result.appendChild(col);
            col.appendChild(carImg);
            col.appendChild(wrappper);
		    wrappper.appendChild(carId);
            wrappper.appendChild(carName);
            wrappper.appendChild(carDescription);
			wrappper.appendChild(carDate);
   }
  return res;
}

function initMainFun(arOb){
changeData(arOb);
printResult(arOb);
return arOb;	
} 

initMainFun(newData);