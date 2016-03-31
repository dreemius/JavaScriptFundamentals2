$(function () {
    
    $("#load").click(function(){
        var resultHTML	 = "";	
        	itemTemplate = '<div class="row">\
            					<div class="col-sm-12 col-lg-4 $iif"><img class="$imgClass" src="$src" alt="$alt"></div>\
            					<div class="col-sm-12 col-lg-offset-1 col-lg-7 $if"><span class="pug-text">$txt</span></div>\
        					</div>';
        $.get( "http://localhost:8081/getDataList", function( data ) {
            var item 	= JSON.parse(data)[0];
            resultHTML += itemTemplate
							.replace("$src", item.url) 
            				.replace("$alt", item.alt) 
            				.replace("$txt", item.description)
            				.replace("$imgClass", item.imgClass) 
                            .replace("$if", item.if) 
                            .replace("$iif", item.iif)
            $("#content").html($("#content").html()+resultHTML);
        });   
    });
});