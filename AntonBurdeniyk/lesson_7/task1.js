var exampleTextarea = document.querySelector('#exampleTextarea');
var exampleInput = document.querySelector('#exampleInput');
var cleanButtom = document.querySelector('#clearButton');
	exampleInput.addEventListener('keyup', copyText);
    cleanButtom.addEventListener('click', delText);
function copyText(){
	exampleTextarea.value = exampleInput.value;
}
function delText(){
	exampleInput.value = "";
	exampleTextarea.value = "";
}