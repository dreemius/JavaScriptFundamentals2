"use strict";

var input = document.querySelector('#exampleInputName2'),
	textArea = document.querySelector('textarea', '.form-control'),
	cleanForm = document.querySelector('#btn');
	
//*************************************************************************************************************************************************************

input.addEventListener("keyup", handleEvent);
cleanForm.addEventListener("click", cleanData);

function handleEvent(){
	textArea.value = input.value;
}

function cleanData(){
	input.value = "";
	textArea.value = "";
}