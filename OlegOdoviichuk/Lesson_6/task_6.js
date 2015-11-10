var ELEMENTS_NUMBER = 4;
var ELEMENTS_START = 5;
var ELEMENTS_FINISH = 10;
var newArr = [];

newArr = data.filter(function(item) {
	return (item.id >= ELEMENTS_START && item.id <= ELEMENTS_FINISH);
	
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
function changeOptions() {
for(var i = 0; i < newArr.length;i++) {
	
	newArr[i].name = changeName(newArr[i].name);
	newArr[i].description = sliceDescription(newArr[i].description);
	newArr[i].date = createDateObject(newArr[i].date);
	
    }
};

function createEl() { 
	var container = document.getElementById("result");
	     
	        for (var j=0; j<ELEMENTS_NUMBER;j++){
			
	      var newElement = document.createElement('div');
		         newElement.className = "col-sm-3 col-xs-6";
		            
					container.appendChild(newElement);
					
		  var imageEl = document.createElement('img');
				 imageEl.src = newArr[j].url;
				 imageEl.alt = newArr[j].name;
				 imageEl.className = "img-thumbnail";
				 
				     newElement.appendChild(imageEl);
					 
		  var infoWrapper = document.createElement('div');
		         infoWrapper.className = "info-wrapper";
				 
				     newElement.appendChild(infoWrapper);
					 
		  var idName = document.createElement('div');
			     idName.className = "text-muted";
				 idName.innerHTML = newArr[j].id + ":" +  newArr[j].name;
				 
		  var descript = document.createElement('div');
			     descript.className = "text-muted";
				 descript.innerHTML = newArr[j].description;
				 
		  var theDate = document.createElement('div');
			     theDate.className = "text-muted";
				 theDate.innerHTML = newArr[j].date;
				 
				     infoWrapper.appendChild(idName);
				     infoWrapper.appendChild(descript);
				     infoWrapper.appendChild(theDate);
	
    }
};

function start(){
	changeOptions();
	createEl();
};
start();
