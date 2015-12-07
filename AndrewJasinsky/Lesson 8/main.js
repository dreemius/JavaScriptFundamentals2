
var formValidator = (function(){

	var DOMElements = null;
	var counter = 1;
	var passData = [];

	function showErrorMessage(){
		DOMElements.errorMessage.classList.remove("hide-content");
	}

	function hideErrorMessage(){
		DOMElements.errorMessage.classList.add("hide-content");
	}

	function showSuccessMessage(){
		DOMElements.successMessage.classList.remove("hide-content");
	}

	function hideSuccessMessage(){
		DOMElements.successMessage.classList.add("hide-content");
	}

	function showTable(){
		DOMElements.resultTable.classList.remove("hide-content");
	}

	function hideTable(){
		DOMElements.resultTable.classList.add("hide-content");
	}

	function hideCompletedForm(){
		DOMElements.completedForm.classList.add("hide-content");
	}

	function showForm(){
		DOMElements.completedForm.classList.remove("hide-content");
	}

	function replacePassword(value) {
		return value.replace(/[\d\D]/g,'*');
	}

	function createTable() {
		passData.push(DOMElements.password.value);
		var passIndex = passData.length - 1;
		var showPasswordButton = "<input type='submit' id='" + passIndex + "-passIndex' class='btn btn-info pull-right' value='Показать пароль'>";
		var table = "<tr><th>" + counter + "</th>" + "<td>" + DOMElements.name.value +
			"</td>" + "<td>" + DOMElements.email.value + "</td>" + "<td>" +
			"<span id='span-" + passIndex + "'>" + replacePassword(DOMElements.password.value)+ "</span>" +  showPasswordButton + "</td></tr>";
		DOMElements.tableContent.innerHTML += table;
		counter++;
	}

	function resetForm() {
		hideTable();
		hideSuccessMessage();
		DOMElements.completedForm.reset();
		showForm();
	}

	function checkForm(event) {
		event.preventDefault();
		var tempEmail = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
		var tempName = /[0-9a-z]+/i;
		if(tempName.test(DOMElements.name.value)&& tempEmail.test(DOMElements.email.value) && DOMElements.password.value) {
			hideErrorMessage();
			hideCompletedForm();
			showSuccessMessage();
			showTable();
			createTable();
		} else {
			showErrorMessage();
		}
	}

	function showHidePassword(event) {
		var passId = parseInt(event.target.id);
		var span = document.querySelector("#span-" + passId);
		if (event.target.value == "Показать пароль") {
			event.target.value = "Скрыть пароль";
			span.innerHTML = passData[passId];
		}
		else {
			event.target.value = "Показать пароль";
			span.innerHTML = replacePassword(passData[passId]);
		}
	}

	return {
		setForm : function(form){
			DOMElements = form;
		},
		initValidator: function(form){
			DOMElements.submitBtn.addEventListener("click", checkForm);
			DOMElements.resetBtn.addEventListener("click", resetForm);
			DOMElements.tableContent.addEventListener("click", showHidePassword);
		}
	}

}());

formValidator.setForm({
	name 			: document.querySelector("#inputName"),
	email 			: document.querySelector("#inputEmail"),
	password 		: document.querySelector("#inputPassword"),
	tableContent 	: document.querySelector("#table-content"),
	submitBtn		: document.querySelector("#submit"),
	resetBtn		: document.querySelector("#reset"),
	errorMessage	: document.querySelector("#errorMessage"),
	successMessage	: document.querySelector("#successMassage"),
	resultTable		: document.querySelector("#resultTable"),
	completedForm	: document.querySelector("#completedForm")

});

formValidator.initValidator();
