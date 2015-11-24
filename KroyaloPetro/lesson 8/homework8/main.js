var formValidator = (function(){
	
	var DOMElements = null;
	var arrUsers = [];

	function showErrorMsg(){DOMElements.errorMsg.className = "bg-danger validation-msg";}
	function hideErrorMsg(){DOMElements.errorMsg.className = "hide";}
	function showTable(){DOMElements.checkTrue.className = "row";}
	function hideTable(){DOMElements.checkTrue.className = "hide";}
	function showForm(){DOMElements.validateForm.className = "form-horizontal";}
	function hideForm(){DOMElements.validateForm.className = "hide";}
	
	function createNewElement(tagName,attribut){
		var itemTemp = document.createElement(tagName);
		for(var atr in attribut){
			itemTemp[atr] = attribut[atr];
		}
		return itemTemp;
	}
	function clearForm(){
		DOMElements.name.value  	= "";
		DOMElements.email.value		= "";
		DOMElements.password.value  = "";
	}
	function addUser(){
		arrUsers.push({
			name 	 : DOMElements.name.value,
			email 	 : DOMElements.email.value,
			password : DOMElements.password.value,
			number	 : DOMElements.tableContent.children.length+1
		});
		addNewTableLine(arrUsers[arrUsers.length-1]);
	}
	function passworHide(pass){
		return pass.replace(/./g,"*");		
	}
	function addNewTableLine(item) {
		var row = createNewElement("tr");
		row.appendChild(createNewElement("th",{
												scope : "row",
												innerHTML : item.number
											  }));
		row.appendChild(createNewElement("td",{
												innerHTML : item.name
											  }));
		row.appendChild(createNewElement("td",{
												innerHTML : item.email
											  }));
		row.appendChild(createNewElement("td"))									  
		row.lastChild.appendChild(createNewElement("span",{
												innerHTML : passworHide(item.password)
											  }));
		row.lastChild.appendChild(createNewElement("button",{
																className : "show_hide_btn",
																innerHTML : "show"
															}));
		row.lastChild.addEventListener("click",function(event){
			if(event.target.tagName == "BUTTON"){
				if(event.target.innerHTML == "show"){
					event.currentTarget.firstChild.innerHTML = item.password;
					event.target.innerHTML = "hide";
				}else{
					row.lastChild.firstChild.innerHTML = passworHide(item.password);
					event.target.innerHTML = "show";
				}
			}
		})
		DOMElements.tableContent.appendChild(row);
	}
	function returnToForm(){
		hideTable();
		hideErrorMsg();
		clearForm();
		showForm();
	}
	function checkForm () {
		if(DOMElements.name.value 
			&& /.+@.+\..+/i.test(DOMElements.email.value) 
			&& DOMElements.password.value) {			
			return true;
		} else {
			return false;
		}
	}
	function validate(event){
		event.preventDefault();
		if(checkForm()){
			addUser();
			hideErrorMsg();
			hideForm();
			showTable();
		}else {
			showErrorMsg();
		}
	}
	
	return {
		setForm : function(form){	
			DOMElements = form;
		},
		initValidator: function(form){
			DOMElements.submitBtn.addEventListener("click",validate);
			DOMElements.resetBtn.addEventListener("click",returnToForm);
		}
	}
}());

formValidator.setForm({
	name 		 : document.querySelector("#inputName"),
	email 		 : document.querySelector("#inputEmail"),
	password 	 : document.querySelector("#inputPassword"),
	tableContent : document.querySelector("#table-content"),
	submitBtn	 : document.querySelector("#submit"),
	resetBtn	 : document.querySelector("#reset"),
	errorMsg	 : document.querySelector("#false"),
	successMsg	 : document.querySelector("#true"),
	checkTrue	 : document.querySelector("#checkTrue"),
	validateForm : document.querySelector("#form")
});
formValidator.initValidator();