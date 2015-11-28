'use strict';
// Created by iPhoenix© development 21.11.2015
//********************************************

var formValidator = (function(){
	var input = null;
	var count = 1;

	function showBanner(selector) {
		$(selector).fadeIn(2500, function() {
			$(this).fadeOut(2500);
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
				type     : 'tr'
		});		
		var zeroCell = createTable({
				el       : rowCreate,
				type     : 'th',
				innerHTML: count
		});
		var firstCell = createTable({
				el       : rowCreate,
				type     : 'td',
				innerHTML: input.name.val()
		});
		var secondCell = createTable({
				el       : rowCreate,
				type     : 'td',
				innerHTML: input.email.val()
		});
		var thirdCell = createTable({
				el       : rowCreate,
				type     : 'td'
		});
		var passSpan = createTable({
				el       : thirdCell,
				type     : 'span',
				innerHTML: input.password.val().replace(/[\s\S]/g, '*')
		});
		var buttonCell = createTable({
				el: thirdCell,
				type     : 'button',
				className: 'btn btn-link',
				innerHTML: 'show'
		});
		rowCreate.lastChild.addEventListener('click', function(event) {
			if(event.target.tagName == 'BUTTON'){
				if(event.target.innerHTML == 'show'){
					event.currentTarget.firstChild.innerHTML = input.password.val();
					event.target.innerHTML = 'hide';
				}else{
					rowCreate.lastChild.firstChild.innerHTML = input.password.val().replace(/[\s\S]/g, '*');
					event.target.innerHTML = 'show';
				}
			}
		});
	}
	
	function checkForm() {
		
		function showHidden() {
			$('.form-horizontal').hide();
			$('#tableOfResult, #reset, p.lead').show();
		}
		
		function isValidEmail(myEmail) { 
			var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
			return reg.test(myEmail); 
		} 
		
		if(input.name.val()
		   && isValidEmail(input.email.val())
		   && input.password.val()) {
			showHidden();
			showBanner('#success-msg');
			addRow();
			count++;
		} else {
			showBanner('#error-msg');
		}
	}
	
	function resetForm() {
		input.name.val('');
		input.email.val('');
		input.password.val('');
		$('.form-horizontal').show();
		$('#tableOfResult, #reset, p.lead').hide();
	}
		
	function validateForm() {	
		input.validBtn.click(function() {
			checkForm();
		});
		input.resetBtn.click(function() {
			resetForm();
		});
	}
	
	return {
		setForm : function(form){
			input = form;
		},
		initValidator: function(){
			validateForm();
		}
	}
}())

//*********************************************************

formValidator.setForm({
	name 	     : $('#inputName'),
	email 	     : $('#inputEmail'),
	password     : $('#inputPassword'),
	validBtn     : $('#btn-valid'),
	resetBtn     : $('#reset'),
	tableOfResult: $('#table-content')
})

formValidator.initValidator();