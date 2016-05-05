app.view = (function(){

    function registerEvent(event){        
        
        event.on(event.evName, function(event, data){       
            $("#img").attr( "src", data.url );
            $("#img").attr( "alt", data.alt );
            $("#text").html( data.description );        
        })
        
    };
    
    return {
        registerEvent : registerEvent
    } 
    
}());