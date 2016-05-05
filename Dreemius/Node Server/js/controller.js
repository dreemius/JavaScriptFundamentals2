(function () {
    
    var event = $({});
    event.evName = "dataLoaded";
    
    function initEvents () {
        app.view.registerEvent(event);
        app.model.registerEvent(event);
    }
    
    function btnListener () {
        $("#load").click(function(){
            app.model.load();
        });
    }
    
    
    function init (){
        initEvents();
        btnListener();
    };
    init();
    
}());