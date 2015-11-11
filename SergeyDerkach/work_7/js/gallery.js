function DeletePicture(divv) {
    $(divv).removeClass().addClass("hide");
}

$(document).ready(function () {
    var resultContainer = $('#result');
//CONSTANTS
    var memoryMin = 0;
    var memoryMax = 5;
    var data = dataGirls;
//Buttons
    var btnCar = $('#btnCar');
    var btnGirls = $('#btnGirls');
    var btn18 = $('#btn18');
    var btnMountains = $('#btnMountains');
    var divWork = $('#divWork');
    var btnChernivtsi = $('#btnChernivtsi');
    var btnMyHobbi = $('#btnMyHobbi');
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

//css
    function hideInput() {
        divWork.addClass("hide");
    }

    function visibleInput() {
        divWork.removeClass("hide").addClass("visible-inline-block");
    }

    function bgLoadGalGirls() {

        $('body').removeClass().addClass("galGirls");
    }

    function bgLoadGalCars() {
        $('body').removeClass().addClass("galCars");
    }

    function bgLoadGalMountains() {
        $('body').removeClass().addClass("galMountains");
    }

    function bgLoadGalMyHobbi() {
        $('body').removeClass().addClass("galMyHobbi");
    }

    function bgLoadGalChernivtsi() {
        $('body').removeClass().addClass("galChernivtsi");

    }

    function bgLoadGal18() {
        $('body').removeClass().addClass("gal18");

    }

//inputs
 function MinMaxLoadGallary() {
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
        loadGallary();

    }
    min.keyup(MinMaxLoadGallary);
    max.keyup(MinMaxLoadGallary);


//loader gallary
    function loadGallary() {
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
                name: upperFirstEl(data[i].name),
                url: data[i].url,
                number: data[i].id,
                description: crop15El(data[i].description),
                date: getDate(data[i].date)
            });
            htmlConteiner += html;
            //обертка по 4 штуки
            if (i == 3 || i == 7 || i == 11 || i == 15 || i == 19 || i == 23 || i == 27) {
                htmlConteiner += '</div>' + '<div class="row">';
            }
        }

        resultContainer.html(htmlConteiner);
    }

    // задание 1
    work1Input.keyup(function () {
        textArea.html($('#exampleInputName2').val());
    });
    $('#submit_0').click(function () {
        textArea.html($('this').val(""));
        work1Input.html(work1Input.val(""));
    });


    function globalLoadGallary() {
        resultContainer.html('');
        visibleInput();
    }

    function loadAll() {
        memoryMin = 0;
        memoryMax = data.length;
        loadGallary();
    }
    $('#loadAll').click(loadAll);

    hideInput();

    btn18.click(function () {
        bgLoadGal18();
        data = data18;
        globalLoadGallary();
    });
    btnGirls.click(function () {
        bgLoadGalGirls();
        data = dataGirls;
        globalLoadGallary();
    });
    btnCar.click(function () {
        bgLoadGalCars();
        data = dataCars;
        globalLoadGallary();
    });
    btnMountains.click(function () {
        bgLoadGalMountains();
        data = dataMountains;
        globalLoadGallary();
    });
    btnChernivtsi.click(function () {
        bgLoadGalChernivtsi();
        data = dataChernivtsi;
        globalLoadGallary();
    });
    btnMyHobbi.click(function () {
        bgLoadGalMyHobbi();
        data = dataMyHobbi;
        globalLoadGallary();
    });
});

