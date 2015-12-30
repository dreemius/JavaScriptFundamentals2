showCodeExample = (function () {
	function run(name) {

		var el						= document.getElementById(name),
			codeRow					= el.querySelector(".code-example"),
			faq						= el.querySelector(".what-button-means"),
			buttonFAQ				= el.querySelector(".faq-code-examlpe"),
			buttonHTML 				= el.querySelector(".btn-html"),
			buttonCSS				= el.querySelector(".btn-css"),
			buttonJS				= el.querySelector(".btn-js"),
			buttonBlackCode			= el.querySelector(".btn-black"),
			buttonWhiteCode			= el.querySelector(".btn-white"),
			buttonCopyCode			= el.querySelector(".copy"),
			htmlCode 				= el.querySelector(".code-html"),
			cssCode 				= el.querySelector(".code-css"),
			jsCode 					= el.querySelector(".code-js"),
			codeText				= el.querySelector(".code"),
			buttonDocumentation 	= el.querySelector(".btn-more-documentation"),
			buttonHideMoreDoc		= el.querySelector(".btn-hide-more-documentation"),
			showMoreDocumentation 	= el.querySelector(".more-documentation");
		
		showCode = (function showCode() {
			
			el.addEventListener("click", function(event) {
				var target = event.target;			
				
				if(target.className == "btn-html") {
					clearButtonActivity ();
					target.className="btn-html active";
					htmlCode.className="show";
				}else if(target.className === "btn-css") {
					clearButtonActivity ();
					target.className="btn-css active";
					cssCode.className="show";
				}else if(target.className === "btn-js") {
					clearButtonActivity ();
					target.className="btn-js active";
					jsCode.className="show";
				}else if(target.className === "black") {
					codeText.className="";
					codeRow.className="code-example black";
					buttonBlackCode.className="btn-black background-black";
				}else if(target.className === "white") {
					codeText.className="code";
					codeRow.className="code-example";
				}else if(target.className === "copy") {
					new Clipboard('.btn-clipboard');
				}else if(target.className === "btn-more-documentation") {
					target.className="btn-more-documentation hide";
					showMoreDocumentation.className="more-documentation";
					buttonHideMoreDoc.className="btn-hide-more-documentation";
				}else if(target.className === "btn-hide-more-documentation") {
					target.className="btn-hide-more-documentation hide";
					showMoreDocumentation.className="more-documentation hide";				
					buttonDocumentation.className="btn-more-documentation";
				}else if(target.className === "btn btn-default btn-xs faq-code-examlpe") {
					faq.className="what-button-means";
					buttonFAQ.className="btn btn-success btn-xs faq-code-examlpe-active";
					buttonFAQ.innerHTML="Скрыть описание"
				}else if(target.className === "btn btn-success btn-xs faq-code-examlpe-active") {
					faq.className="what-button-means hide";
					buttonFAQ.className="btn btn-default btn-xs faq-code-examlpe";
					buttonFAQ.innerHTML="Что значат кнопки?"
				}
				
				function clearButtonActivity () {
					buttonHTML.className	="btn-html";
					buttonCSS.className		="btn-css";
					buttonJS.className		="btn-js";
					htmlCode.className		="hide";
					cssCode.className		="hide";
					jsCode.className		="hide";
				}
			})
		}())
	}	
		
		return {
			init : function(id){
				run(id);
			}
		}
}());

showCodeExample.init("example-show-msg");
showCodeExample.init("example-change-txt");
showCodeExample.init("every-5-minute");
showCodeExample.init("example-simple");
showCodeExample.init("example-js");
showCodeExample.init("example-structure");
