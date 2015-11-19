//Task_2 !


var START_INDEX;
var FINISH_INDEX;
var ELEMENTS_NUMBER;
var newArr = [];
var container = document.getElementById("result");
var maindiv;


function changeName(name) {
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
};
function sliceDescription(description) {
	return description.slice(0, 15);
};

function createDateObject(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
	(tmpDate.getMonth()+1) + "/" +
	tmpDate.getDate() + " " +
	tmpDate.getHours() + ":" +
	tmpDate.getMinutes();
};
function changeOptions(arrObj) {
	
	arrObj.name = changeName(arrObj.name);
	arrObj.description = sliceDescription(arrObj.description);
	arrObj.date = createDateObject(arrObj.date);
};

function createEl(item) { 
	
	container.appendChild(maindiv);
	
	var newElement = document.createElement('div');
	newElement.className = "col-sm-3 col-xs-6";
	
	maindiv.appendChild(newElement);
	
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

//*******************************************************
var addelement = document.querySelector("#addelm");
addelement.addEventListener("click", addOneElement);
var totalcount = document.querySelector("#count");
var delelement = document.querySelector("#delelm");
delelement.addEventListener("click", delOneElement);

var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var input3 = document.querySelector("#input3");

var j;
function addOneElement() {
	
	START_INDEX = input1.value;
	FINISH_INDEX = input2.value;
	ELEMENTS_NUMBER = input3.value;
	
	if (START_INDEX <= 9 && FINISH_INDEX <= 10){
		newArr = data.filter(function(item) {
			return (item.id >= START_INDEX && item.id <= FINISH_INDEX);
			
		});
		maindiv = document.createElement('div');
		for (j=0;((j<ELEMENTS_NUMBER)&&(j<newArr.length));j++){
			changeOptions(newArr[j]);
			createEl(newArr[j]);
		};
		totalCount(j);
		input1.value = "";
		input2.value = "";
		input3.value = "";
		}else{
		alert("Нечего добавлять")
	};
	}
	
	function delOneElement() {
		container.removeChild(container.lastChild);
		j = 0;
		totalCount(j);		  
	}
	
	function totalCount(pics) {
		totalcount.innerHTML = pics;
		
	};	