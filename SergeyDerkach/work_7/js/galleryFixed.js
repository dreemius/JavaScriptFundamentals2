$(document).ready(function () {

    var btnMap = {
        btnCar      : {className: "galCars", dataName: "car"},
        btnGirls    : {className: "galGirls", dataName: "girls"},
        btn18       : {className: "gal18", dataName : "photo18" },
        btnMountains: {className: "galMountains", dataName: "mountains" },
        btnChernivtsi:{className: "galChernivtsi", dataName: "chernivtsi"},
        btnMyHobbi  : {className: "galMyHobbi", dataName: "myHobbi"}
    };

    //CONSTANTS
    var memoryMin = 0;
    var memoryMax = 5;
    var data = null;//btnMap.btnGirls.dataName;

    //Dom elements
    var resultContainer = $('#result');
    var loadBtn = $('#loadAll');
    var navBtn = $('#navBtn');

    var divWork = $('#divWork');
    var main = $('#main');
    var min = $('#min');
    var max = $('#max');
    var work1Input = $('#exampleInputName2');
    var textArea = $('#InputTEXT');


    // Фукции по работе со стрингами
    function upperFirstEl(upper) {
        var upper = upper[0].toLocaleUpperCase() + upper.slice(1).toLocaleLowerCase();
        return upper;
    }

    function crop15El(crash) {
        var crash = crash.slice(0, 15);
        return crash;
    }

    function getDate(clock) {
        moment.locale('ru');
        var clock = moment(clock).format('YYYY/DD/MM, HH:mm');//2015/07/02 14:15
        return clock;
    }

    //loader gallary
    function loadGallery() {
        min.val(memoryMin);
        max.val(memoryMax);
        var htmlConteiner = '<div class="row">';
        for (var i = memoryMin; i <= memoryMax-1; i++) {
            //проверка на ошибку чтоб не крешился цыкл
            if (data[i] == undefined) {
                break;
            }
            var compiled = _.template($("#item-template").html());
            var html = compiled({
                name    : upperFirstEl(data[i].name),
                url     : data[i].url,
                number  : data[i].id,
                description: crop15El(data[i].description),
                date    : getDate(data[i].date)
            });
            htmlConteiner += html;
            //обертка по 4 штуки
            if (i == 3 || i == 7 || i == 11 || i == 15 || i == 19 || i == 23 || i == 27) {
                htmlConteiner += '</div>';
            }
        }
        resultContainer.html(htmlConteiner);
    }

    function loadAll() {
        memoryMin = 0;
        memoryMax = data.length;
        loadGallery();
    }

    function minMaxLoadGallary() {
        memoryMin = min.val();
        memoryMax = max.val();
        if (memoryMin > memoryMax) {
            return
        }
        if (memoryMin < 0) {
            return
        }
        if (memoryMax > data.length) {
            memoryMax = data.length
        }
        loadGallery();
    }

    function deleteElement(event){
        var btn = event.target;
        $(btn).closest('.col-sm-3').remove();
    }

    //css
    function hideInput() {
        divWork.addClass("hide");
    }
    function visibleInput() {
        divWork.removeClass("hide").addClass("visible-inline-block");
    }

    function updateLayoutData(event) {
        var button = $(event.target).closest(".btn").get(0);
        if (button) {
            var btnId = button.id;
            var mapItem = btnMap[btnId];
            data = dataLists[mapItem.dataName];
            refreshLayout(mapItem.className);
        }
    }

    function refreshLayout(className) {
        $('body').removeClass().addClass(className);
        resultContainer.html('');
        visibleInput();
    }

    function initListeners() {
        loadBtn.click(loadAll);
        min.keyup(minMaxLoadGallary);
        max.keyup(minMaxLoadGallary);

        navBtn.click(updateLayoutData);
        resultContainer.click(deleteElement);
    }

    function initialize() {
        initListeners();
        hideInput();
    }
    initialize();

});

