var resultContainer = $('#result');
//CONSTANTS
var memoryVal_0 = 0;
var memoryVal_1 = 0;
var data = dataGirls;
//Buttons
var dataSlider = $('#ex2');
var btnCar = $('#btnCar');
var btnGirls = $('#btnGirls');
var btn18 = $('#btn18');
var btnMountains = $('#btnMountains');
var divSlider = $('#ex1Slider');
var btnChernivtsi = $('#btnChernivtsi');
var btnMyHobbi = $('#btnMyHobbi');
//css bg
var main = $('#main');

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
    divSlider.addClass("hide");
}
function visibleInput() {
    divSlider.removeClass("hide").addClass("visible-inline-block");
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
//slider
function gallarySliders() {
    dataSlider.slider({
        formatter: function (value) {
            return 'Current value: ' + value;
        }
    }).on('slide', loadGallary);
}

function changeSliderMax() {
    var value = dataSlider.data('slider').getValue();
    dataSlider.data('slider').max = data.length - 1;
    dataSlider.slider('setValue', value);
}

function sliderMemory() {
    var memoryValue = dataSlider.val();
    var listArr = memoryValue.split(",");
    memoryVal_0 = listArr[0];
    memoryVal_1 = listArr[1];
    return [memoryVal_0, memoryVal_1];
}
//loader gallary
function loadGallary() {
    sliderMemory();
    var htmlConteiner = '<div class="row">';
    for (var i = memoryVal_0; i <= memoryVal_1; i++) {
        //проверка на ошибку чтоб не крешился цыкл
        if (data[i] == undefined) {
            break;
        }
        var compiled = _.template($("#item-template").html());
        var html = compiled({
            name: upperFirstEl(data[i].name),
            url: data[i].url,
            number: data[i].number,
            description: crop15El(data[i].description),
            date: getDate(data[i].date)
        });
        htmlConteiner += html;
        //обертка по 4 штуки
        if (i == 3 || i == 7 || i == 11 || i == 15 || i == 19 || i == 23 || i == 27) {
            htmlConteiner += '</div>' + '<div class="row">';
        }

    }
    // console.log(htmlConteiner);
    resultContainer.html(htmlConteiner);
}
function globalLoadGallary() {
    visibleInput();
    gallarySliders();
    changeSliderMax();
    loadGallary();
}
$(document).ready(function () {
    hideInput();

    btn18.click(function () {
        bgLoadGal18();
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

