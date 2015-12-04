var formValidator = (function(){
	
	var DOMElements = null;
        
	function showErrorMsg(){
	         DOMElements.errorMsg.style.display = ""; //DONE
	}
	
	function hideErrorMsg(){
	         DOMElements.errorMsg.style.display = "none"; //DONE
	}
	
	function showSuccessMsg(){
	         DOMElements.succsesMsg.style.display = "";  //DONE
	}
	
	function hideSuccessMsg(){
	         DOMElements.succsesMsg.style.display = "none";  //DONE
	}
	
	function showTable(){
	         DOMElements.borderedTable.parentNode.style.display = ""; //DONE
	}
	
	function hideTable(){
	         DOMElements.borderedTable.parentNode.style.display = "none";  //DONE
	}
	
	function hideForm(){ 
		DOMElements.form.style.display = "none"; 
		}
	
	function showForm(){
		DOMElements.form.style.display = ""
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
		fragmentTD3.innerHTML = DOMElements.password.value;
		
	}
		
	function checkForm (event) {
		event.preventDefault();
		if(DOMElements.name.value 
			&& DOMElements.email.value 
			&& DOMElements.password.value) {
			    addNewTableLine();
				showSuccessMsg();
				showTable();
				hideForm();
				hideErrorMsg();
				
				
		} else {
			showErrorMsg();
		}
	}
	
	function validateForm(){
		  hideSuccessMsg();
	      hideErrorMsg();
	      hideTable();
	  }
	
	function resetForm(){
	     hideTable();
	     showForm();
	     hideSuccessMsg();
		 hideErrorMsg();
		DOMElements.name.value="";
		DOMElements.email.value="";
		DOMElements.password.value="";
		
}
			
	return {
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