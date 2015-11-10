	var inputName2  = document.querySelector("#exampleInputName2");
	var textArea    = document.querySelector("#textareaTask1");
	var buttonClear = document.querySelector("#buttonClear");
	buttonClear.addEventListener("click",function(event){
		if (event.target.id == buttonClear.id){
			inputName2.value = "";
			textArea.value	 = "";
		}
	});
	inputName2.addEventListener("keyup",function(event){ 
		textArea.value = inputName2.value;
	});