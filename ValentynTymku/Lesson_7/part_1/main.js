var input = document.getElementById('exampleInputName2');
var text = document.getElementById('targetTextArea');
var btnSubmit = document.getElementById('btnSubmit');

input.addEventListener ("keyup", function(event) {
	var inputLength = input.value.length;
	var textLength = text.value.length;

	if (inputLength > textLength) {
		text.value += input.value.substr(inputLength - (inputLength - textLength));
	} else if (inputLength < textLength) {
		text.value = text.value.substr(0, inputLength);
	};
});

btnSubmit.addEventListener ("click", function(event) {
	input.value = '';
	text.value = '';
})
			