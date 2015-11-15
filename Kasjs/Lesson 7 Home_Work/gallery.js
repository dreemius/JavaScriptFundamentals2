var FROM = 1, TO = 10,NUMBER_OF_ELEMENTS = 10;
var newData = [];
var count = 0;
var container = selector('#result');
var total = selector('#count');


//Simplest filter of the object
function filterObject() {

	newData = data.splice(NUMBER_OF_ELEMENTS) ;
	newData = data.slice(FROM - 1, TO);
}

function formatDate(index){
	var formDate = new Date(newData[index].date);
	var year = formDate.getFullYear();
	var month = formDate.getMonth() + 1;
	var day = formDate.getDate();
	var hour = formDate.getHours();
	var minutes = formDate.getMinutes();
	newData[index].date = year + "/" + month + "/" + day + " " + (hour < 10 ? "0" + hour : hour) + ":" + (minutes < 10 ? "0" + minutes : minutes);
}

function preparingObj(index){
	newData[index].name = newData[index].name.toLowerCase();
	newData[index].name = newData[index].name.replace(/[^abc]/,newData[index].name.charAt(0).toUpperCase());
	newData[index].description = newData[index].description.slice(0, 15);
}
// format object to required layout
function formatObject () {
	for (var i = 0; i < newData.length; i++) {
		preparingObj(i);
		formatDate(i);
	}
	return newData;
}

function create(el){
	return document.createElement(el);
}
function selector(tag){
	return document.querySelector(tag);
}
function formatDiv(objProperty,elem){

	(objProperty.className) && (elem.className = objProperty.className);
	(objProperty.src)&&(elem.src = objProperty.src);
	(objProperty.alt)&&(elem.alt = objProperty.alt);
	(objProperty.innerHTML)&&(elem.innerHTML = objProperty.innerHTML);
	(objProperty.href)&&(elem.href = objProperty.href);
	return elem;
}

function fillDiv(i){


	    var outerContainer = create("div");
	    container.appendChild(outerContainer);
		outerContainer = formatDiv({
			className: 'col-sm-3 col-xs-6'
		},outerContainer);

	    var imageNew = create('img');
		outerContainer.appendChild(imageNew);
		imageNew = formatDiv({
			className: 'img-thumbnail',
			src: newData[i].url,
			alt: newData[i].name
		},imageNew);

		var innerContainer = create('div');
		outerContainer.appendChild(innerContainer);
		innerContainer = formatDiv({
			className: 'info-wrapper'
		},innerContainer);

	    var link = {};
			link.a = create('a');
	    outerContainer.appendChild(link.a);
	    link.a = formatDiv({
			href: '#',
			className: 'delLink',
			innerHTML: 'remove'
		},link.a);

		var numberAndName = create('div');
		innerContainer.appendChild(numberAndName);
		numberAndName = formatDiv({
			className: "text-muted",
			innerHTML: newData[i].id + ". " + newData[i].name
		},numberAndName);

		var description = create('div');
		innerContainer.appendChild(description);
		description = formatDiv({
			className: 'text-muted',
			innerHTML: newData[i].description
		},description);

		var dateLine = create('div');
		innerContainer.appendChild(dateLine);
		dateLine = formatDiv({
			className: 'text-muted',
			innerHTML: newData[i].date
		},dateLine);
	removeElem();

}
filterObject();
formatObject();

//-----------------------------------------------------------------------------

function displayAndClear() {
	var inPut = selector('#exampleInputName2');
	var textArea = selector('#text');
	var delText = selector('#del');
	inPut.addEventListener('keyup', function () {
		textArea.value = inPut.value;
	});
	delText.addEventListener('click',function(){
		textArea.value = "";
		inPut.value = "";
	});
}
function addElement() {


	var adBat = selector('#addB');
	var disableButton = function () {
		adBat.className = 'btn btn-sm btn-danger disabled';
	}

	function createElHandler() {

		if (count < 10) {
			fillDiv(count);

			total.innerHTML = count + 1;
			count++;
		} else {
			disableButton();
		}

	}
	adBat.addEventListener('click', createElHandler);
}
//work incorrect
function removeElem(){
	var delBat = selector('a.delLink');
	delBat.addEventListener('click',function(event){
		event.stopPropagation();
		event.preventDefault();
		event.currentTarget.parentNode.remove();
		count--;
		total.innerHTML = count;
	});
}


displayAndClear();
addElement();







			