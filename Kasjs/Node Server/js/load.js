$(function () {
    
    $("#load").click(function(){
        
        $.get( "http://localhost:8081/getDataList", function( data ) {
            var item = JSON.parse(data);
            $(item).each(function(index,element){
                var div = document.createElement('div');
                console.log('i');
                var img = $('.img');
                $(img).attr( "src", element.url );
                $(img).attr( "alt",element.alt );
                var text = $(".text").html( element.description);

            });
        });
    });
});