var formValidator = (function(){
	var formElem = {},
		id = 1,
		regExpEmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
		btnShow = document.createElement('button'),
		tdTab = document.getElementsByTagName('td');

	function showSuccess () {
		$('.bg-danger').hide();
		$('.bg-success').show();
		$('.lead, .form-horizontal').hide();
		$('.table-container').show();
	}

	function showError () {
		$('.bg-danger').show();
	}

	function showForm () {
		$('.lead, .form-horizontal').show();
		$('.form-horizontal')[0].reset();
	}

	function checkForm() {
		if (formElem.name.val() && regExpEmail.test(formElem.email.val()) && formElem.password.val()) {
			showSuccess();

			formElem.tableContent.append('<tr><th>'+ id + '</th>' + 
										'<td>' + formElem.name.val() + '</td>' + 
										'<td>' + formElem.email.val() + '</td>' +
										'<td>' + formElem.password.val().replace(/[\d\D]/g,'*') + '</td></tr>');
			id++;
	 	} else {
			showError();		
		}
	}

	function validateForm() {
 		formElem.submitBtn.click(function(event) {
 			event.preventDefault();
			checkForm();
			
    		btnShow.appendChild(document.createTextNode("Show"));
			tdTab[2].appendChild(btnShow);

			btnShow.addEventListener('click', function showPass () {
				tdTab[2].innerHTML = formElem.password.val();
			});
 		});

		formElem.resetBtn.click(function () {
			$('.bg-success, .bg-danger, .table-container').hide();
			showForm();
		});
	}

	return { 
		setForm : function(form) {
		 	formElem = form;
		},
		initValidator : function() {
		 	validateForm();
		}
	}

}());

formValidator.setForm({
	name 	: $("#inputName"),
	email 	: $("#inputEmail"),
	password : $("#inputPassword"),
	tableContent : $("#table-content"),
	submitBtn : $('#submit'),
	resetBtn : $('#reset')
});

formValidator.initValidator();