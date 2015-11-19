var input = document.querySelector('input');
var textarea=document.querySelector('textarea');
var button=document.querySelector('button');


input.addEventListener("keyup",displayInTextarea);
button.addEventListener("click",resetData);

function displayInTextarea(){
	var valReceive=event.target.value;
	textarea.value=valReceive;
}
function resetData(){
	textarea.innerHTML=" ";
	}
	
/*input.addEventListener("keyup",function(){
  var textSend = input.value;
  textarea.value=textSend;
  });*/