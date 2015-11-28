

var formValidator = (function(){
	
	var EMAIL_REGEXP = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var usersArray = [];
	var DOMElements = null;
	
	function elementDisplay(elem, none) { elem.style.display = none }

	function showTable(){
		DOMElements.tableContent.innerHTML = "";
		usersArray.forEach(function(item, i) {
  			DOMElements.tableContent.innerHTML += "<tr><td>" + ++i + "</td><td>" + item.name + "</td><td>" + item.email + "</td><td>" + item.password.replace(/[\s\S]/g, '*') + "</td></tr>";
		});
		elementDisplay(DOMElements.result, "");
	}

	function checkForm (event) {
		resetMessages();
		event.preventDefault();
		if ( DOMElements.name.value 
			 && DOMElements.password.value 
			 && EMAIL_REGEXP.test(DOMElements.email.value)) {
			 	usersArray.push({name : DOMElements.name.value, email : DOMElements.email.value, password : DOMElements.password.value});			
				showTable();
				elementDisplay(DOMElements.successMsg, "");
		} else {
			resetMessages();
			elementDisplay(DOMElements.errorMsg, "");
		}
	}

	function resetMessages() {
		elementDisplay(DOMElements.errorMsg, "none");
		elementDisplay(DOMElements.successMsg, "none");
	}

	function resetForm() {
		DOMElements.result.style.display = "none";
		usersArray = [];
		resetMessages();
	};
	
	return {
		setForm : function(form){	
			DOMElements = form;
		},
		initValidator: function(form){
			DOMElements.submitBtn.addEventListener( "click", checkForm );
			DOMElements.resetBtn.addEventListener( "click", resetForm );
		}
	}
}())

formValidator.setForm({
	name 	: document.querySelector("#inputName"),
	email 	: document.querySelector("#inputEmail"),
	password : document.querySelector("#inputPassword"),
	result : document.querySelector("#result"),
	successMsg : document.querySelector("#successMsg"),
	errorMsg : document.querySelector("#errorMsg"),
	tableContent : document.querySelector("#table-content"),
	submitBtn : document.querySelector("#submitBtn"),
	resetBtn : document.querySelector("#resetBtn"),
})

formValidator.initValidator();