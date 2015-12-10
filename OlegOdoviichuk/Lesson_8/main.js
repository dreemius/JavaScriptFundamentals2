var formValidator = (function(){
	
	var DOMElements = null;
        
	function showTable(){
	         DOMElements.borderedTable.parentNode.style.display = ""; //DONE
	}
	
	function hideTable(){
	         DOMElements.borderedTable.parentNode.style.display = "none";  //DONE
	}

    var n = 0;
	function addNewTableLine() {
		var row = document.createElement("tr"),
		    fragmentTH = document.createElement("th"),
			fragmentTD1 = document.createElement("td"),
			fragmentTD2 = document.createElement("td"),
		    fragmentTD3 = document.createElement("td");
		    n++;
		DOMElements.tableContent.appendChild(row);
		row.appendChild(fragmentTH);
		fragmentTH.innerHTML = n; 
		row.appendChild(fragmentTD1);
		fragmentTD1.innerHTML = DOMElements.name.value;
		row.appendChild(fragmentTD2);
		fragmentTD2.innerHTML = DOMElements.email.value;
		row.appendChild(fragmentTD3);
		fragmentTD3.innerHTML = changePassword(DOMElements.password.value);
		
	}
	
	function changePassword (text) {
		
		return text.replace(/./g, "*");
		}
		
	function checkForm (event) {
		event.preventDefault();
		if(DOMElements.name.value 
			&& DOMElements.email.value 
			&& DOMElements.password.value) {
			    addNewTableLine();
				formValidator.hideNshow("succsesMsg", "");
				formValidator.hideNshow("form", "none");
				formValidator.hideNshow("errorMsg", "none");
				showTable();
				
		} else {
			formValidator.hideNshow("errorMsg", "");
		}
	}
	
	function validateForm(){
		  formValidator.hideNshow("succsesMsg", "none");
	      formValidator.hideNshow("errorMsg", "none");
	      hideTable();
	  }
	
	function resetForm(){
	     hideTable();
	     formValidator.hideNshow("form", "");
	     formValidator.hideNshow("succsesMsg", "none");
		 formValidator.hideNshow("errorMsg", "none");
		DOMElements.name.value="";
		DOMElements.email.value="";
		DOMElements.password.value="";		
}	

	return {
	
	    hideNshow : function(elm, cls) {
		   DOMElements[elm].style.display = cls;
		},
		setForm : function(form){	
			DOMElements = form;
		},
		initValidator: function(){
			validateForm();
			DOMElements.submitBtn.addEventListener("click", checkForm);
			DOMElements.resetBtn.addEventListener("click", resetForm);
		}
    }
}())

formValidator.setForm({
	name 	: document.querySelector('#inputName'),
	email 	: document.querySelector('#inputEmail'),
	password : document.querySelector('#inputPassword'),
	tableContent : document.querySelector('#table-content'),
	submitBtn : document.querySelector('#submit'),
	resetBtn : document.querySelector('#reset'),
	succsesMsg : document.querySelector('.bg-success'),
    errorMsg : document.querySelector('.bg-danger'),
	borderedTable : document.querySelector('.table-bordered'),
    form : document.querySelector('.form-horizontal')
})
formValidator.initValidator();