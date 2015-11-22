var formValidator = (function(){
	var formElem = {};
	var id = 1;
	
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
		if (formElem.name.val() && formElem.email.val().indexOf('@') > -1 && formElem.password.val()) {
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