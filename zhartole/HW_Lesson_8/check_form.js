/**      Create by zhartole 24.11.15    **/

var formValidator = (function(){
	var input = null,
	    count = 1;

// create Table

	function addNewTable(argument) {
		var element = document.createElement(argument.type);
		argument.innerHTML && (element.innerHTML = argument.innerHTML);
		argument.className && (element.className = argument.className);
		argument.el.appendChild(element);
		return element;
	}
	
	function addUser() {
		var row = document.querySelector('#table-content');
		var trCreate = addNewTable({
				el       : row,
				type     : 'tr'
		});		
		var thCreate = addNewTable({
				el       : trCreate,
				type     : 'th',
				innerHTML: count
		});
		var nameTdCreate = addNewTable({
				el       : trCreate,
				type     : 'td',
				innerHTML: input.name.val()
		});
		var emailTdCreate = addNewTable({
				el       : trCreate,
				type     : 'td',
				innerHTML: input.email.val()
		});
		var passTdCreate = addNewTable({
				el       : trCreate,
				type     : 'td'
		});
		var passSpan = addNewTable({
				el       : passTdCreate,
				type     : 'span',
				innerHTML: input.password.val().replace(/[\s\S]/g, '*')
		});
		var buttonDelete = addNewTable({
			el       : passTdCreate,
			type     : 'button',
			className: 'remove',
			innerHTML: 'Delete'
		});
		var buttonShowPass = addNewTable({
				el: passTdCreate,
				type     : 'button',
				className: 'btn btn-link',
				innerHTML: 'show'
		});

		buttonDelete.addEventListener("click", deleteElement);
		function deleteElement(event) {
			if (event.target.className == 'remove') {
				row.removeChild(event.target.closest('tr'));
			}
		}

		trCreate.lastChild.addEventListener('click', function(event) {
			if(event.target.className == 'btn btn-link'){
				if(event.target.innerHTML == 'show'){
					event.currentTarget.firstChild.innerHTML = input.password.val();
					event.target.innerHTML = 'hide';
				}else{
					event.currentTarget.firstChild.innerHTML = input.password.val().replace(/[\s\S]/g, '*');
					event.target.innerHTML = 'show';
				}
			}
		});
	}

// Create help message

	function showMessage(selector) {
		$(selector).show(1000);
	}

// Check Form

	function checkValue() {
		function showResult() {
			$('#tableOfResult').show();
			$('#reset').show();
			$('p.lead').show();
		}
		
		function isEmailcorrect(myEmail) {
			var reg = /.+@.+\..+/i;
			return reg.test(myEmail); 
		} 
		
		if(input.name.val()
		   && isEmailcorrect(input.email.val())
		   && input.password.val()) {
			$('.form-horizontal').hide();
			showResult();
			showMessage('#success');
			addUser();
			count++;
		} else {
			showMessage('#error');
		}
	}

// Have problem with resetForm: #Succes not hiding

	function resetForm() {
		$('.form-horizontal').show();
		input.name.val('');
		input.email.val('');
		input.password.val('');
	}

// Hide all elements

	function hideAll() {
		$('#success').hide();
		$('#error').hide();
		$('#tableOfResult').hide();
		$('#reset').hide();
		$('p.lead').hide();
		$('#lead').hide();
	}

// validate Form

	function doValidate() {
		$('#btn-valid').click(function() {
			hideAll();
			checkValue();
		});
		$('#reset').click(function() {
			hideAll();
			resetForm();
		});
	}

	return {
		setForm : function(form){
			input = form;
		},
		initValidator: function(){
			doValidate();
		}
	}
}());

formValidator.setForm({
	name 	     : $('#inputName'),
	email 	     : $('#inputEmail'),
	password     : $('#inputPassword')
});

formValidator.initValidator();