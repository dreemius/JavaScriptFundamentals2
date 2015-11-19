var input= document.getElementById("exampleInputName2");
var textArea= document.getElementById("textarea1");
var clean=document.getElementById("clean");

input.addEventListener("keyup", handleEvent);
clean.addEventListener("click", clearText);

function handleEvent(){
	textArea.value=input.value;
}
function clearText(){
	input.value="";
	textArea.value="";
}