/**
 * Improve Gallery
 * create by zhartole 8.11.2015
 */
var FIRST, //id first img;
	LAST,//id last img;
	NUMBER_OF_IMAGES,//number of image;
    inputText       = document.querySelector('#exampleInputName2'),
	textArea        = document.querySelector('textarea', '.form-control'),
	cleanText       = document.querySelector('#cleanText'),
	valueInput      = document.querySelector('#inputGroup'),
	addNewPicture   = document.querySelector('#addNewPicture'),
    addAllPicture   = document.querySelector('#addAllPicture'),
	delAllPicture   = document.querySelector('#delAllPicture'),
	resultContainer = document.querySelector("#result"),
	errorContainer  = document.querySelector("#error"),
	countShow		= document.querySelector("#count-image"),
	count = 0;

/** Task - 1 for HW_Lesson_7 ; */

inputText.addEventListener("keyup", handleEvent);
cleanText.addEventListener("click", cleanData);

function handleEvent(){ textArea.value = inputText.value; }

function cleanData(){ inputText.value = ""; textArea.value = ""; }

/** Task-2 for HW_Lesson_7 ; */

valueInput.addEventListener("keyup", addFiltrdImg);
addNewPicture.addEventListener('click', addImg);
addAllPicture.addEventListener('click', addAllImg);
delAllPicture.addEventListener('click', clearContainer);
valueInput.addEventListener("keyup", ifWord);

// filtering data ;
function addFiltrdImg() {
	clearContainer();
	FIRST = document.querySelector('.start').value - 1;
	LAST = document.querySelector('.end').value;
	NUMBER_OF_IMAGES = document.querySelector('.total').value;
	(FIRST > data.length || LAST > data.length || NUMBER_OF_IMAGES > data.length) ? resultContainer.innerHTML = checkNumberImg() : '';
	function inBetween (){ return data.slice(FIRST, LAST).slice(0, NUMBER_OF_IMAGES) }
	for (var item = FIRST; item < inBetween().length; item++) { doTemplate(item); }
}
//add 1 more image ;
function addImg() { (count < data.length) ? doTemplate(count) : checkNumberImg(); }

//add all image ;
function addAllImg() {
	clearContainer();
	for(var item = 0; item < data.length; item++ ) { doTemplate(item); }
}

//clean image
function clearContainer() {
	addNewPicture.className 		 = "btn btn-sm btn-success";
	errorContainer.innerHTML 		 = "";
	count 							 = 0;
	countShow.innerHTML              = count;
	return resultContainer.innerHTML = "";
}

//check for letters
function ifWord(event) { event.target.value = event.target.value.replace(/[^\d,]/g, ''); }

//check number of image
function checkNumberImg () {
	addNewPicture.className  = "btn btn-sm btn-danger disabled";
	errorContainer.innerHTML = '<div class="error"><b>Sorry</b> We don`t have enough image. <br> Please.Enter number from 0 to 10</div>';
}

// work with data [image]

function capitalizedFirstLetter(name) {
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

function doShortDescription(description) {
	return description.slice(0, 15);
}

function doFormattedDate(date) {
	var corrDate = new Date(date);
	return corrDate.getFullYear() + "/" + (corrDate.getMonth() + 1) + "/" + corrDate.getDate() + " " + corrDate.getHours() + ":" + corrDate.getMinutes();
}

function createNewElement(argument) {
	var element = document.createElement(argument.type);
	argument.className && (element.className = argument.className);
	argument.src && (element.src = argument.src);
	argument.alt && (element.alt = argument.alt);
	argument.innerHTML && (element.innerHTML = argument.innerHTML);
	argument.el.appendChild(element);
	return element;
}

// row breaks
function doRow (item, showImageOnRow) {
	if (item > 0) {
		var row = item / showImageOnRow;
		(row ^ 0) === row ? resultContainer.innerHTML += "<div class = row><br></div>" : "";
	}
};

function doTemplate(item) {
	    doRow(item,4);
		var group = createNewElement({ el: resultContainer, type: "div", className: "col-sm-3 col-xs-6" });
		var img = createNewElement({ el: group, type: "img", className: "img-thumbnail", src: data[item].url, alt: capitalizedFirstLetter(data[item].name) });
		var delImg = createNewElement({ el: group, type: "button", className: "btn-for-delete-img", innerHTML: "Remove"});
		var infoWrapper = createNewElement({ el: group, type: "div", className: "info-wrapper" });
		var innerGroupName = createNewElement({ el: infoWrapper, type: "div", className: "text-muted", innerHTML: data[item].id + ' ' + capitalizedFirstLetter(data[item].name) });
		var innerGroupDescription = createNewElement({ el: infoWrapper, type: "div", className: "text-muted", innerHTML: doShortDescription(data[item].description) });
		var innerGroupDate = createNewElement({ el: infoWrapper, type: "div", className: "text-muted", innerHTML: doFormattedDate(data[item].date) });
		delImg.addEventListener("click", function deleteElement(event) {
		if(event.target.className == 'btn-for-delete-img') {
			resultContainer.removeChild(event.target.closest('.col-sm-3'));
			count--;
			countShow.innerHTML = count
		}
	});
	count++;
	countShow.innerHTML = count
}



