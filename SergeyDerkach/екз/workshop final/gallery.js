var filmLoader = (function () {
    var valueInput = $('#search');
    var textSerch = "star";
    var resultContainer = $('#resultContainer');
    var btnSerch = $('#btnSerch');
//    var data = {};

//Value input
    valueInput.val(textSerch);
    function buildOneItem() {
        resultContainer.html(html);
    }


    function getQueryString() {
        var textInp = valueInput.val();
        return textInp;
    }

    function getInputValue() {
        getQueryString();
    }

//loader gallary
    function loadGallery(data1) {
       // search(getQueryString());
        console.log(data1);
        var htmlConteiner = '<div class="row">';
        _.each(data1.Search, function (data) {
        var compiled = _.template($("#item-template").html());
        var html = compiled({
            Poster: data.Poster,
            Title: data.Title,
            Type: data.Type,
            Year: data.Year,
            imdbID: data.imdbID
        });
        htmlConteiner += html;

        resultContainer.html(htmlConteiner);
        });

    }


//don't change
    function search(searchString) {
        console.log("sdsdf");
        jQuery.getScript('http://www.omdbapi.com/?s=' + searchString + '&plot=short&r=json&callback=onDataLoaded');
    }


    function buildTable(data) {
        console.log("1" + data);
        loadGallery(data);
    }

    function initListeners() {
        btnSerch.click(function(){
            console.log("sdddd");

            search(getQueryString())});
        //    valueInput.on("focusout", getInputValue)
    }

    function init() {
        initListeners();

    }

    init();

    return {
        //don't change
        buildTable: function (data) {
            buildTable(data);
        }
    }

}());

//don't change
window.onDataLoaded = function (list) {
    filmLoader.buildTable(list);
};


