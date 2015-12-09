"use strict";
var formValidator = (function(){
var DOMElements,
    counter=1;
function hideInputFields(){
    DOMElements.inputForm.style.display="none";
	}
function showInputFields(){
	DOMElements.inputForm.style.display="block";
	}
function hideTableContent(){
	DOMElements.tableContentAll.style.display="none";
	}
function showTableContent(){
	DOMElements.tableContentAll.style.display="table";
	}
function showResOfInput(){
	DOMElements.fiellRequestLast.style.display="block";
	DOMElements.fiellRequestFirst.style.display="none";
	}
function hideResOfInput(){
	DOMElements.fiellRequestLast.style.display="none";
	DOMElements.fiellRequestFirst.style.display="block";
	}
function showSuccessMsg(){
	DOMElements.resetBtn.style.display="block";
	DOMElements.successMsg.style.display="block";
	}
function hideSuccessMsg(){
	DOMElements.resetBtn.style.display="none";
	DOMElements.successMsg.style.display="none";
	}
function showErrorMsg(){
	DOMElements.errorMsg.style.display="block";
    }
function hideErrorMsg(){
	DOMElements.errorMsg.style.display="none";
    }


function createTableElement(tagName,inHTML){
	var tableElement=document.createElement(tagName);
	tableElement.className='.table-bordered';
	inHTML && (tableElement.innerHTML=inHTML);
	return tableElement;
	}
function validateEmail(userEmail) { 
	var regulExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
	return regulExp.test(userEmail); 
	}

function addNewLine(){
  	var wrapTable = createTableElement('tr');
	var nameTable = createTableElement('td',DOMElements.names.value);
	var emailTable = createTableElement('td',DOMElements.email.value);
	var passwordTable = createTableElement('td',DOMElements.password.value.replace(/[\s\S]/g, '*'));
	var displayCounter=createTableElement('th',counter); 
	 
	DOMElements.names.value="";
	DOMElements.email.value="";
	DOMElements.password.value="";
	 
DOMElements.tableContent.appendChild(wrapTable);
	 wrapTable.appendChild(displayCounter);
	 wrapTable.appendChild(nameTable);
	 wrapTable.appendChild(emailTable);
	 wrapTable.appendChild(passwordTable);
	 counter++;
     }

function checkForm(event){
   event.preventDefault();
	if(DOMElements.names.value 
	  && validateEmail(DOMElements.email.value)
	  && DOMElements.password.value){
		 addNewLine();
		 showSuccessMsg();
		 hideInputFields();
		 showResOfInput();
		 showTableContent();
		 hideErrorMsg();
	}else{
	      showErrorMsg();
		}
	}
function returnToInput(){
	 hideTableContent();
	 showInputFields();
	 hideSuccessMsg();
	 hideResOfInput();
    }
return {
	 setForm : function(form){	
	 DOMElements = form;
	 },
	 initValidator: function(form){
	 DOMElements.submitBtn.addEventListener("click",checkForm);
     DOMElements.resetBtn.addEventListener("click",returnToInput);
	 }
	}
}())

formValidator.setForm({
 names: document.querySelector("#inputName"),
 email: document.querySelector("#inputEmail"),
 password: document.querySelector("#inputPassword"),
 submitBtn: document.querySelector("#submit"),
 resetBtn: document.querySelector("#reset"),
 tableContent : document.querySelector("#table-content"),
 tableContentAll : document.querySelector(".table-bordered"),
 inputForm:document.querySelector(".form-horizontal"),
 successMsg:document.querySelector(".bg-success"),
 errorMsg:document.querySelector(".bg-danger"),
 fiellRequestLast:document.querySelector("p.lead:last-of-type"),
 fiellRequestFirst:document.querySelector("p.lead:first-of-type"),
})
formValidator.initValidator();
