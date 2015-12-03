

var formValidator = (function(){
	
	var EMAIL_REGEXP = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var usersArray = [];
	var userId = 0;
	var DOMElements = null;
	
	function elementDisplay(elem, display) { elem.style.display = display ? '' : 'none' }

	function hideMessages() {
		elementDisplay(DOMElements.errorMsg, false);
		elementDisplay(DOMElements.successMsg, false);
	}

	function resetForm() {
		hideMessages();
		elementDisplay(DOMElements.result, false);
		elementDisplay(DOMElements.form, true);
	};

	function getPasswdByUserId(id) {
		var pass ='';
		usersArray.forEach(function(item, i) {
			if (item.id == id) { pass = item.password };
		});
		return pass;
	}

	function changePassword(event) {
		var password = getPasswdByUserId(event.target.id);
		if (event.target.type == 'button' && event.target.getAttribute("class") == 'btn btn-info') {
			event.target.parentElement.previousSibling.innerHTML = password;
			event.target.setAttribute("class", "btn btn-warning");
			event.target.innerHTML = "Скрыть пароль";
		} else if (event.target.type == 'button' && event.target.getAttribute("class") == 'btn btn-warning') {
			event.target.parentElement.previousSibling.innerHTML = password.replace(/[\s\S]/g, '*');
			event.target.setAttribute("class", "btn btn-info");
			event.target.innerHTML = "Показать пароль";
		}
	}

	function resetMessages() {
		elementDisplay(DOMElements.errorMsg, "none");
		elementDisplay(DOMElements.successMsg, "none");
	}

	function showTable(){
		DOMElements.tableContent.innerHTML = "";
		usersArray.forEach(function(item, i) {
		DOMElements.tableContent.innerHTML += "<tr><td>" + item.id + "</td><td>" + item.name + "</td><td>" + item.email + "</td>" 
  												+ "<td>" + item.password.replace(/[\s\S]/g, '*') + "</td>" 
  												+ "<td><button id='" + item.id + "' type='button' class='btn btn-info'>Показать пароль</button></td></tr>";
		});
		elementDisplay(DOMElements.form, false);
		elementDisplay(DOMElements.result, true);
	}

	function checkForm (event) {
		hideMessages();
		event.preventDefault();
		if ( DOMElements.name.value 
			 && DOMElements.password.value 
			 && EMAIL_REGEXP.test(DOMElements.email.value)) {
			 	usersArray.push({id : ++userId, name : DOMElements.name.value, email : DOMElements.email.value, password : DOMElements.password.value});			
			 	elementDisplay(DOMElements.successMsg, true);
				showTable();
		} else {
			elementDisplay(DOMElements.errorMsg, true);
		}
	}
	
	return {
		setForm : function(form){	
			DOMElements = form;
		},
		initValidator: function(){
			DOMElements.submitBtn.addEventListener( "click", checkForm );
			DOMElements.resetBtn.addEventListener( "click", resetForm );
			DOMElements.tableContent.addEventListener( "click", changePassword );
		}
	}
}())

formValidator.setForm({
	name 	: document.querySelector("#inputName"),
	email 	: document.querySelector("#inputEmail"),
	password : document.querySelector("#inputPassword"),
	result : document.querySelector("#result"),
	form : document.querySelector("#form"),
	successMsg : document.querySelector("#successMsg"),
	errorMsg : document.querySelector("#errorMsg"),
	tableContent : document.querySelector("#table-content"),
	submitBtn : document.querySelector("#submitBtn"),
	resetBtn : document.querySelector("#resetBtn"),
})

formValidator.initValidator();