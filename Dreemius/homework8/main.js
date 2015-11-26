

var formValidator = (function(){
	
	var DOMElements = null;
	
	function showErrorMsg(){}
	function hideErrorMsg(){}
	
	function showSuccessMsg(){}
	
	function showTable(){}
	function hideTable(){}
	
	
	function addNewTableLine() {
		var row;
		
		
		DOMElements.tableContent.innerHTML += row
		hideErrorMsg();
		showTable();
	}
	
	
	function checkForm () {
		if(DOMElements.name.value 
			&& DOMElements.email.value 
			&& DOMElements.password.value) {			
				showTable();
			
		} else {
			showErrorMsg();
		}
	}
	
	DOMElements.submitBtn.addEventListener("click", checkForm);
	
	
	validateForm : function(){},
	reset : function(){},
	
	return {
		setForm : function(form){	
			DOMElements = form;
		},
		initValidator: function(form){
			validateForm();
		}
	}
	
	
}())

formValidator.setForm({
	name 	: document.querySelector("inputName"),
	email 	: document.querySelector("inputEmail"),
	password : document.querySelector("inputPassword"),
	tableContent : document.querySelector("table-content"),
	submitBtn
	resetBtn
})
formValidator.initValidator();