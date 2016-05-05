window.app = {
    model   : {},
    view    : {}
};

app.model = (function(){
    
    var event = null;
    
    function registerEvent (ev) {
        event =   ev;  
    };

    function load(){        
        $.get( "http://localhost:8081/getDataList", function( data ) {
            var item = JSON.parse(data)[0];
            event.trigger(event.evName, item);
        });   
    };
    
    
    return {
        load : load,
        registerEvent: registerEvent
    } 
    
}());