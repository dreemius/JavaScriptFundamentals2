

var formValidator = (function(){
	
	var DOMElements = null;
	
	function createNewElement(classElement,attribute){
	var itemTemp 	   = document.createElement(classElement);
	for(var atr in attribute){
		itemTemp[atr] = attribute[atr];
	}
	return itemTemp;
	}
	
	function showErrorMsg(){
		DOMElements.invalidForm.className="bg-danger validation-msg";
	}
	function hideErrorMsg(){
		DOMElements.invalidForm.className="hide";
	}
	
	function hideSuccessMsg(){
		DOMElements.validForm.className="hide";
	}
	function showForm(){
		DOMElements.formResult.className="row";
	}
	function hideForm(){
		DOMElements.formResult.className="hide";
	}
	function showInputFields(){
		DOMElements.inputFields.className="row";
	}
	function hideInputFields(){
		DOMElements.inputFields.className="hide";
	}
	
	function addNewTableLine() {
		var row=createNewElement("tr");
		row.appendChild(createNewElement("th",{scope: "row", innerHTML : (DOMElements.tableContent.children.length+1)}));
		row.appendChild(createNewElement("td",{innerHTML :DOMElements.name.value }));
		row.appendChild(createNewElement("td",{innerHTML: DOMElements.email.value}));
		row.appendChild(createNewElement("td",{innerHTML: hidePassword()}));
				DOMElements.tableContent.appendChild(row);
			}
			function hidePassword(){
				var pass = DOMElements.password.value;
				return pass.replace(/./g, "*");
			}
			
			function checkForm () {
				if(DOMElements.name.value 
					&& /.+@.+\..+/i.test(DOMElements.email.value)
					&& DOMElements.password.value) {			
					addNewTableLine();
			hideErrorMsg();
			hideInputFields();
			showForm();
		} else {
			showErrorMsg();
		}
	}
	
	
	function resetForm(){
		hideForm();
		showInputFields();
		DOMElements.name.value="";
		DOMElements.email.value="";
		DOMElements.password.value="";
	}
	return {
		setForm : function(form){	
			DOMElements = form;
		},
		initValidator: function(form){
			DOMElements.submitBtn.addEventListener("click", checkForm);
			DOMElements.resetBtn.addEventListener("click", resetForm);
		}
	}
	
	
}())

formValidator.setForm({
	name 	: document.querySelector("#inputName"),
	email 	: document.querySelector("#inputEmail"),
	password : document.querySelector("#inputPassword"),
	tableContent : document.querySelector("#table-content"),
	validForm: document.querySelector("#correct"),
	invalidForm: document.querySelector("#incorrect"),
	formResult: document.querySelector("#result"),
	inputFields: document.querySelector("#input"),
	submitBtn: document.querySelector("#submit"),
	resetBtn: document.querySelector("#reset")
})
formValidator.initValidator();