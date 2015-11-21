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
		paramSet.className && (element.className = paramSet.className);
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
				className: 'thirdCell',
				innerHTML: input.password.value.replace(/[\s\S]/g, '*')
		});
		var buttonCell = createTable({
				el: thirdCell,
				type     : 'button',
				className: 'show-pass',
				innerHTML: '***'
		});
		$('.show-pass').click(function() {
			$('.thirdCell').text(input.password.value);
		});
	}
	
	function checkForm() {
		
		function showHidden() {
			$('.form-horizontal').hide();
			$('#tableOfResult').show();
			$('#reset').show();
			$('p.lead').show();
		}
		
		function isValidEmail(myEmail) { 
			var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
			return reg.test(myEmail); 
		} 
		
		if(input.name.value
		   && isValidEmail(input.email.value)
		   && input.password.value) {
			showHidden();
			showBanner('#success-msg');
			addRow();
			count++;
		} else {
			showBanner('#error-msg');
		}
	}
	
	function sda() {

	}
	
	function validateForm() {
		$('#btn-valid').click(function() {
			checkForm();
		});
		$('#reset').click(function() {
			$('.form-horizontal').show();
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