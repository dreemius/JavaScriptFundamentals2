$(function () {
    
    $("#load").click(function(){
        
        $.get( "http://localhost:8081/getDataList", function( data ) {
            var item = JSON.parse(data)[0];

            $("#img").attr( "src", item.url );
            $("#img").attr( "alt", item.alt );
            $("#text").html( item.description );
        });   
        
    });


    
    
});