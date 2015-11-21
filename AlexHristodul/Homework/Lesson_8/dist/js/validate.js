'use strict';
// Created by iPhoenix© development 21.11.2015
//********************************************

var formValidator = (function(){
	var input = null;
	var count = 2;

	function showBanner(selector) {
		$(selector).show(2000, function() {
			$(this).hide(4000);
		});
	}
	
	function createTable(paramSet) {
		var element = paramSet.el.appendChild(document.createElement(paramSet.type));
		paramSet.innerHTML && (element.innerHTML = paramSet.innerHTML);
		paramSet.id && (element.id = paramSet.id);
		return element;
	}
	
	function addRow() {
		var firstRow = document.querySelector('#table-content');
		var rowCreate = createTable({
				el       : firstRow,
				type     : 'tr',
		});		
		var zeroCell = createTable({
				el       : rowCreate,
				type     : 'th',
				innerHTML: count
		});
		var firstCell = createTable({
				el       : rowCreate,
				type     : 'td',
				innerHTML: input.name.value
		});
		var secondCell = createTable({
				el       : rowCreate,
				type     : 'td',
				innerHTML: input.email.value
		});
		var thirdCell = createTable({
				el       : rowCreate,
				type     : 'td',
				id       : 'fuck',
				innerHTML: input.password.value.replace(/[\s\S]/g, '*')
		});
		var buttonCell = createTable({
				el: thirdCell,
				type     : 'button',
				id       : 'show-pass',
				innerHTML: '***'
		});
	}
	
	function checkForm() {
		
		function isValidEmail(myEmail) { 
			var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
			return reg.test(myEmail); 
		} 
		
		if(input.name.value
		   && isValidEmail(input.email.value)
		   && input.password.value) {
			$('.form-horizontal').hide();
			showBanner('#success-msg');
			$('#tableOfResult').show();
			addRow();
			count++;
		} else {
			showBanner('#error-msg');
		}
	}
	
	function validateForm() {
		$('#btn-valid').click(function() {
			checkForm();
		});
		$('#reset').click(function() {
			$('.form-horizontal').show();
		});
		$('#show-pass').click(function() {
			$('#fuck').text(input.password.value);
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
	password     : document.querySelector('#inputPassword')
})

formValidator.initValidator();