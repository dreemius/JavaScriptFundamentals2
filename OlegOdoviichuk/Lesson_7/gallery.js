                 //Task_1!

var input = document.querySelector("#exampleInputName2"),
    textarea  = document.querySelector("#txtar"),
    deleteall = document.querySelector("#del");
		  
		input.addEventListener("keyup", inputTextarea);
		del.addEventListener("click", delArea);   // почему с "keyup" тоже работает?
		
		
function inputTextarea() {
	textarea.value = input.value;				
}
		
				
function delArea() {
	textarea.value = "";
	input.value = "";
};
				
				//Task_2 !
				
			
var START_INDEX = 0;
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
	(tmpDate.getMonth()+1) + "/" +
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

//*******************************************************
var addelement = document.querySelector("#addelm");
    addelement.addEventListener("click", addOneElement);
var totalcount = document.querySelector("#count");
    
	var j = 0;
	function addOneElement () {
	     	
			changeOptions(newArr);
	        createEl(newArr[j]);
			j++;
			totalCount ();
	}
	
var delelement = document.querySelector("#delelm");
    delelement.addEventListener("click", delOneElement);
	
	function delOneElement() {
	      container.removeChild(container.lastChild);
		  j--;
		  totalCount ();
	}
	
function totalCount () {
	totalcount.innerHTML = j; 
}