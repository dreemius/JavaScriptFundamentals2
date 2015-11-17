

var formValidator = (function(){
	
	validateForm : function(){},
	reset : function(){},
	
	return {
		setForm : function(form){},
		initValidator: function(form){}
	}
	
	
}())

formValidator.setForm({
	name : document.querySelector("inputName"),
	imail : document.querySelector("inputEmail"),
	....
	tableWrapper
	submitBtn
	resetBtn
})
formValidator.initValidator();