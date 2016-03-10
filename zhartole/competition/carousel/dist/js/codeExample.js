showCodeExample = (function () {
	
	var codeRow					= document.querySelector(".code-example"),	
		buttonHTML 				= document.querySelector("#html"),
		buttonCSS				= document.querySelector("#css"),
		buttonJS				= document.querySelector("#js"),
		buttonBlackCode			= document.querySelector(".btn-black"),
		buttonWhiteCode			= document.querySelector(".btn-white"),
		buttonCopyCode			= document.querySelector("#copy"),
		htmlCode 				= document.querySelector("#code-html"),
		cssCode 				= document.querySelector("#code-css"),
		jsCode 					= document.querySelector("#code-js"),
		codeText				= document.querySelector("#code"),
		instruction				= document.querySelector(".instruction"),
		buttonDocumentation 	= document.querySelector("#btn-more-documentation"),
		buttonHideMoreDoc		= document.querySelector("#btn-hide-more-documentation"),
		showMoreDocumentation 	= document.querySelector("#more-documentation");
	
	function showCode(name) {
		if(name === "html") {
			clearButtonActivity ();
			buttonHTML.className="btn-html active";
			htmlCode.className="show";
		}else if(name === "css") {
			clearButtonActivity ();
			buttonCSS.className="btn-css active";
			cssCode.className="show";
		}else if(name === "js") {
			clearButtonActivity ();
			buttonJS.className="btn-js active";
			jsCode.className="show";
		}else if(name === "black") {
			codeText.className="";
			codeRow.className="code-example black";
			buttonBlackCode.className="btn-black background-black";
		}else if(name === "white") {
			codeText.className="code";
			codeRow.className="code-example";
		}else if(name === "copy") {
			new Clipboard('.btn-clipboard');
		}else if(name === "more-documentation") {
			showMoreDocumentation.className="";
			buttonDocumentation.className="hide";
			buttonHideMoreDoc.className="";
		}else if(name === "hide-more-documentation") {
			showMoreDocumentation.className="hide";
			buttonHideMoreDoc.className="hide";
			buttonDocumentation.className="";
		}
		
		function clearButtonActivity () {
			buttonHTML.className	="btn-html";
			buttonCSS.className		="btn-css";
			buttonJS.className		="btn-js";
			htmlCode.className		="hide";
			cssCode.className		="hide";
			jsCode.className		="hide";
		}
	}
	
	function setEventListener() {
		buttonHTML.addEventListener("click",	  		function showHTML(event)		{	showCode("html")					});
		buttonCSS.addEventListener("click",		  		function showCSS(event)			{	showCode("css")						});
		buttonJS.addEventListener("click",		  		function showJS(event)			{	showCode("js") 						});
		buttonBlackCode.addEventListener("click", 		function showBlackCode(event)	{	showCode("black")					});
		buttonWhiteCode.addEventListener("click", 		function showWhiteCode(event) 	{	showCode("white")					});
		buttonCopyCode.addEventListener("click",  		function copyCode(event) 		{	showCode("copy");					});
		buttonDocumentation.addEventListener("click", 	function showMoreDoc(event) 	{	showCode("more-documentation");		});
		buttonHideMoreDoc.addEventListener("click",  	function hideMoreDoc(event) 	{	showCode("hide-more-documentation");});
	}

	

	
	return {
		init : function(){
	 		setEventListener()
		}
	}
}());

showCodeExample.init();