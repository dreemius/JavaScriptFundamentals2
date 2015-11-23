var formValidator = (function(){
	var formElem = {},
		id = 1,
		regExpEmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
		pass = [];

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
			pass.push(formElem.password.val());
			formElem.tableContent.append('<tr><th>'+ id + '</th>' + 
										'<td>' + formElem.name.val() + '</td>' + 
										'<td>' + formElem.email.val() + '</td>' +
										'<td><span>' + formElem.password.val().replace(/[\d\D]/g,'*') + '</span><button class="show-pass" data-id='+ id +'></buton></td></tr>');
			$('td:last button').click(function(event){
				var target = $(event.target);
				var index = Number(target.attr('data-id'));
				if (target.hasClass('active')) {
					target.parent().find('span').text(pass[index-1].replace(/[\d\D]/g,'*'));
					target.removeClass('active');
				} else {
					$(event.target).parent().find('span').text(pass[index-1]);
					target.addClass('active');
				}
			});
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
		},
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