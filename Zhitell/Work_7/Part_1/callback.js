var input = document.querySelector('#exampleInputName2');
var textArea = document.querySelector('#copyTxt');
	
var eraser = document.querySelector('.btn-default');
	eraser.addEventListener('click', function(){
    input.value = '';
	textArea.innerHTML = input.value;
});

input.addEventListener('input', function() {
    textArea.innerHTML = input.value;
  });