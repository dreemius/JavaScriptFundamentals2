// Bug

var formValidator = (function(){
	
	var DOMElements = null,
        succsesMsg = document.querySelector('.bg-success'),
        errorMsg = document.querySelector('.bg-danger'),
	    borderedTable = document.querySelector('.table-bordered'),
		form = document.querySelector('.form-horizontal');
	
	function showErrorMsg(){
	         errorMsg.style.display = ""; //DONE
	}
	
	function hideErrorMsg(){
	         errorMsg.style.display = "none"; //DONE
	}
	
	function showSuccessMsg(){
	         succsesMsg.style.display = "";  //DONE
	}
	
	function hideSuccessMsg(){
	         succsesMsg.style.display = "none";  //DONE
	}
	
	function showTable(){
	         borderedTable.parentNode.style.display = ""; //DONE
	}
	
	function hideTable(){
	         borderedTable.parentNode.style.display = "none";  //DONE
	}
	
	function hideForm(){ 
		form.style.display = "none"; 
		}
	
	function showForm() {
		form.style.display = ""
		}
	
	function addNewTableLine() {
		var row = document.createElement("tr");
		row.appendChild(document.createElement("th",{scope: "row", innerHTML : 1}));
		row.appendChild(document.createElement("td",{innerHTML : DOMElements.name.value})); 
		row.appendChild(document.createElement("td",{innerHTML : DOMElements.email.value}));
		row.appendChild(document.createElement("td",{innerHTML : DOMElements.password.value}));
		DOMElements.tableContent.appendChild(row);
		
	}
		//row[2] = DOMElements.password.value
		//DOMElements.tableContent.innerHTML += row
		
	function checkForm () {
		if(DOMElements.name.value 
			&& DOMElements.email.value 
			&& DOMElements.password.value) {
			    addNewTableLine();
				showSuccessMsg();
				showTable();
				hideForm();
				
				
		} else {
			showErrorMsg();
		}
	}
	
	
	function validateForm(){
		  hideSuccessMsg();
	      hideErrorMsg();
	      hideTable();
	  }
	
	function resetForm() {
	     hideTable();
	     showForm();
		DOMElements.name.value="";
		DOMElements.email.value="";
		DOMElements.password.value="";
		
		}
		
		
	//validateForm : function(){},
	//reset : function(){},
	
	return {
		setForm : function(form){	
			DOMElements = form;
		},
		initValidator: function(form){
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
	resetBtn : document.querySelector('#reset')
})
formValidator.initValidator();