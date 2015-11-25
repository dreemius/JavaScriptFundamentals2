var formValidator = (function(){
	
	var DOMElements = null;
	var arrUsers = [];

	function showErrorMsg(){DOMElements.errorMsg.className = "bg-danger validation-msg";}
	function hideErrorMsg(){DOMElements.errorMsg.className = "hide";}
	function showTable(){DOMElements.checkTrue.className = "row";}
	function hideTable(){DOMElements.checkTrue.className = "hide";}
	function showForm(){DOMElements.validateForm.className = "form-horizontal";}
	function hideForm(){DOMElements.validateForm.className = "hide";}
	
	function createNewElement(tagName,attributes){
		var itemTemp = document.createElement(tagName);
		for(var atr in attributes){
			itemTemp[atr] = attributes[atr];
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
																className : "btn btn-default show_hide_btn",
																innerHTML : "show"
															}));
		DOMElements.tableContent.appendChild(row);
	}
	function checkForm () {
		return (DOMElements.name.value 
			&& /.+@.+\..+/i.test(DOMElements.email.value) 
			&& DOMElements.password.value) 
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
	function returnToForm(){
		hideTable();
		hideErrorMsg();
		clearForm();
		showForm();
	}
	function passBtn (event){
		if(event.target.tagName == "BUTTON"){
			var pass = arrUsers[+(event.target.parentElement.parentElement.firstChild.innerHTML)-1].password;
			if(event.target.innerHTML == "show"){
				event.target.previousSibling.innerHTML = pass;
				event.target.innerHTML = "hide";
			}else{
				event.target.previousSibling.innerHTML = passworHide(pass);
				event.target.innerHTML = "show";
			}
		}
	}
	return {
		setForm : function(form){	
			DOMElements = form;
		},
		initValidator: function(form){
			DOMElements.submitBtn.addEventListener("click",validate);
			DOMElements.resetBtn.addEventListener("click",returnToForm);
			DOMElements.tableContent.addEventListener("click",passBtn);
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