'use strict';
// Created by iPhoenix© development 21.11.2015
//********************************************
var formValidator = (function(){
	var input = null;

	function showDiv(selector) {
		$(selector).show(2000, function() {
			$(this).hide(4000);
		});
	}
	
	function checkForm() {
		if(input.name.value
		   && input.email.value
		   && input.pasword.value) {
			showDiv('#success-msg');
			$('#tableOfResult').show();
		} else {
			showDiv('#error-msg');
		}
	}
	
	function validateForm() {
		$('#btn-valid').click(function() {
			checkForm();
		});	
	}
	
	return {
		setForm : function(form){
			input = form;
		},
		initValidator: function(form){
			validateForm();
		}
	}
}())

//*********************************************************

formValidator.setForm({
	name 	     : document.querySelector('#inputName'),
	email 	     : document.querySelector('#inputEmail'),
	pasword      : document.querySelector('#inputPassword'),
	tableContent : document.querySelector('#table-content')
})

formValidator.initValidator();