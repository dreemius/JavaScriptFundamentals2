var output=document.getElementById('output');
var count=0;
output.value=count;

var newDate = function(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           tmpDate.getMonth() + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
};

function cutDescription(descript){
	 return descript.substr(0,15);
	 }; 

function firstLetterUpper(str){
return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
     };

function changeData(obj){
 for(var i=0; i<obj.length; i++){
	 obj[i].name=firstLetterUpper(obj[i].name);
	 obj[i].description=cutDescription(obj[i].description);
	 obj[i].date=newDate(obj[i].date);
	 }
	 return obj;
   };

function createTemplate(tagName,clName,inHtml){
    var template=document.createElement(tagName);
    clName && (template.className=clName);
    inHtml && (template.innerHTML=inHtml);
    return template;
    };
function createImg(clName,source){
	var tempImg=document.createElement('img')
	clName && (tempImg.className=clName);
	source && (tempImg.src=source);
	return tempImg;
	};

function printResult(arrObj,ind){
   var result=document.getElementById('result');
   var col=createTemplate('div','col-sm-3 col-xs-6');
   var wrappper=createTemplate('div','info-wrapper');
   var carIdName= createTemplate('div','text-muted',arrObj[ind].id+':'+arrObj[ind].name);
   var carImg= createImg('img-thumbnail',arrObj[ind].url);
   var carDescription= createTemplate('div','text-muted',arrObj[ind].description);	
   var carDate= createTemplate('div','text-muted',arrObj[ind].date);
   var delButton=createTemplate('a','delbutt','delete');
  
   var res=+result.appendChild(col);
            col.appendChild(carImg);
            col.appendChild(wrappper);
		    wrappper.appendChild(carIdName);
            wrappper.appendChild(carDescription);
			wrappper.appendChild(carDate);
			wrappper.appendChild(delButton);
			
			delButton.style.cursor="pointer";  
			delButton.addEventListener("click",function(event){
			col.style.display="none";
			output.value=(count--)-1;
			 })
			 };

var buttonAddCar=document.getElementById('addCar');
buttonAddCar.addEventListener("click",function(event){
changeData(data);
printResult(data,count);
output.value=(count++)+1;
});



