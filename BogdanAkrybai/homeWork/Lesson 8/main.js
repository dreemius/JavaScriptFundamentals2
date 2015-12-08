
var formValidator = (function(){

	var elements = null;
	var counter = 1;
	var passData = [];

	function showErrorMessage() {
		elements.errorMessage.classList.remove("hide-content");
	}

	function hideErrorMessage(){
		elements.errorMessage.classList.add("hide-content");
	}

	function showSuccessMessage(){
		elements.successMessage.classList.remove("hide-content");
	}

	function hideSuccessMessage(){
		elements.successMessage.classList.add("hide-content");
	}

	function showTable(){
		elements.resultTable.classList.remove("hide-content");
	}

	function hideTable(){
		elements.resultTable.classList.add("hide-content");
	}

	function hideCompletedForm(){
		elements.completedForm.classList.add("hide-content");
	}

	function showForm(){
		elements.completedForm.classList.remove("hide-content");
	}

	function replacePassword() {
		return elements.password.value.replace(/./g, "*");

	}

	function createTable() {
		passData.push(elements.password.value);
		var passIndex = passData.length - 1;
		var showPasswordButton = "<input type = 'submit' id='" + passIndex + "-passIndex' class='btn btn-info pull-right' value='Show password'>";
		var table = "<tr><th>" + counter + "</th>" + "<td>" + elements.name.value +
			"</td>" + "<td>" + elements.email.value + "</td>" + "<td>" +
			"<span id = 'span-" + passIndex + "'>" + replacePassword() + "</span>" +  showPasswordButton + "</td></tr>";
		elements.tableContent.innerHTML += table;
		counter++;
	}

	function showHidePass(event) {
		var passId = parseInt(event.target.id);
		var span = document.querySelector("#span-" + passId);
		if (event.target.value == "Show password") {
			event.target.value = "Hide password";
			span.innerHTML = passData[passId];
		}
		else {
			event.target.value = "Show password";
			span.innerHTML = replacePassword(passData[passId]);
		}
	}

	function resetForm() {
		hideTable();
		hideSuccessMessage();
		elements.completedForm.reset();
		showForm();
	}

	function checkForm(event) {
		event.preventDefault();
		var tempEmail = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
		var tempName = /[0-9a-z]+/i;
		if(tempName.test(elements.name.value)&& tempEmail.test(elements.email.value) && elements.password.value) {
			hideErrorMessage();
			hideCompletedForm();
			showSuccessMessage();
			showTable();
			createTable();
		} else {
			showErrorMessage();
		}
	}

	return {
		setForm : function(form){
			elements = form;
		},
		initValidator: function(form){
			elements.submitBtn.addEventListener("click", checkForm);
			elements.resetBtn.addEventListener("click", resetForm);
			elements.tableContent.addEventListener("click", showHidePass);
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



