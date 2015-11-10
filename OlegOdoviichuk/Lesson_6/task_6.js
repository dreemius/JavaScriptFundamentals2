var ELEMENTS_NUMBER = 4;
var START_INDEX = 5;
var FINISH_INDEX = 10;
var newArr = [];
var container = document.getElementById("result");

newArr = data.filter(function(item) {
	return (item.id >= START_INDEX && item.id <= FINISH_INDEX);
	
});


function changeName(name) {
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
};
function sliceDescription(description) {
	return description.slice(0, 15);
};

function createDateObject(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
	tmpDate.getMonth() + "/" +
	tmpDate.getDate() + " " +
	tmpDate.getHours() + ":" +
	tmpDate.getMinutes();
};
function changeOptions(arrObj) {
for(var i = 0; i < newArr.length;i++) {
	
	newArr[i].name = changeName(arrObj[i].name);
	newArr[i].description = sliceDescription(arrObj[i].description);
	newArr[i].date = createDateObject(arrObj[i].date);
	
    }
};

function createEl(item) { 
			
		
	      var newElement = document.createElement('div');
		         newElement.className = "col-sm-3 col-xs-6";
		            
					container.appendChild(newElement);
					
		  var imageEl = document.createElement('img');
				 imageEl.src = item.url;
				 imageEl.alt = item.name;
				 imageEl.className = "img-thumbnail";
				 
				     newElement.appendChild(imageEl);
					 
		  var infoWrapper = document.createElement('div');
		         infoWrapper.className = "info-wrapper";
				 
				     newElement.appendChild(infoWrapper);
					 
		  var idName = document.createElement('div');
			     idName.className = "text-muted";
				 idName.innerHTML = item.id + ":" +  item.name;
				 
		  var descript = document.createElement('div');
			     descript.className = "text-muted";
				 descript.innerHTML = item.description;
				 
		  var theDate = document.createElement('div');
			     theDate.className = "text-muted";
				 theDate.innerHTML = item.date;
				 
				     infoWrapper.appendChild(idName);
				     infoWrapper.appendChild(descript);
				     infoWrapper.appendChild(theDate);
			
};

function printResult(arrObj){
	 changeOptions(arrObj);
	for (var j=0; j<ELEMENTS_NUMBER;j++){
	 createEl(arrObj[j]);
	};
};

	
    printResult(newArr); 


