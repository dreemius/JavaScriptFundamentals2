	htmlCont = (function(){
		var	classes 	= {
				divInfo : "form-group",
				btnRun	: "btn btn-default",
				pLead	: "lead",
				hide	: "hide"
			},
			DOMElements = {
				divInfo 	 : document.querySelector("#divInfo"),
				btnRun		 : document.querySelector("#btnRun"),
				pLead		 : document.querySelector("#lead"),
				pCons		 : document.querySelector("#console"),
				kettleSelect : document.querySelector("select"),
				inputName	 : document.querySelector("#inputName"),
				btnDel		 : document.querySelector("#btnDel")
			};
		function getData(){
			return {
				classes		: classes,
				DOMElements : DOMElements
			}
		}
		return {getData : getData};
	})();