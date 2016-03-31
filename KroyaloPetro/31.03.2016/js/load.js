$(function () {
    
    $("#load").click(function(){
        var resultHTML	 = "";	
        	itemTemplate = '<div class="row imgbox">\
            					<div class="col-sm-6 col-md-5 col-lg-4 $iif"><img class="dimg" src="$src" ></div>\
            					<div class="col-sm-6 col-md-7 col-lg-8 $if"><p class="txtblock">$txt</p></div>\
        					</div>\
                            <div class="row">\
                                <div class="col-sm-12 col-md-12 col-lg-12">\
                                     <div class="between"></div>\
                                </div>\
                             </div>';
        $.get( "http://localhost:8081/getDataList", function( data ) {
            var item 	= JSON.parse(data)[0];
            resultHTML += itemTemplate
							.replace("$src", item.url)
            				.replace("$txt", item.description) 
                            .replace("$if", item.if) 
                            .replace("$iif", item.iif)
            $("#content").html($("#content").html()+resultHTML);
        });   
    });
});