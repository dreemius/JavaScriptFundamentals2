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
var backgraund = '';
var galGirls = 'transparent url("gallary/bg/DSC_8520.jpg") no-repeat center center fixed';
var galCars = 'transparent url("gallary/bg/car.jpg") no-repeat center center fixed';
var gal18 = 'transparent url("gallary/bg/JTxhG61xZHk.jpg") no-repeat center center fixed';
var galMountains = 'transparent url("gallary/bg/everest.jpg") no-repeat center center fixed';
var galMyHobbi = 'transparent url("gallary/bg/alp.jpg") no-repeat center center fixed';
var galChernivtsi = 'transparent url("gallary/bg/DBC_0937.jpg") no-repeat center center fixed';
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
//Функции по работе с галереей
function hideInput() {
    divSlider.css({
        'display': 'none'
    });
}
function visibleInput() {
    divSlider.css({
        'display': 'inline-block'
    });
}
function bgLoad() {
    main.css({
        'background': backgraund,
        'width': '105%',
        'height': '105%',
        '-moz-background-size': 'cover',
        '-o-background-size': '102% auto',
        '-webkit-background-size': '102% auto',
        '-khtml-background-size': 'cover',
        'background-size': 'cover'
    });
}
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

function loadGallary() {
    sliderMemory();
    var htmlConteiner = '<div class="row">';
    for (var i = memoryVal_0; i <= memoryVal_1; i++) {
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

        if (i == 3 || i == 7 || i == 11 || i == 15 || i == 19 || i == 23 || i == 27) {
            htmlConteiner += '</div>' + '<div class="row">';
        }

    }
    // console.log(htmlConteiner);
    resultContainer.html(htmlConteiner);
}
function globalLoadGallary() {
    bgLoad();
    visibleInput();
    gallarySliders();
    changeSliderMax();
    loadGallary();
}
$(document).ready(function () {
    hideInput();

    btn18.click(function () {
        backgraund = gal18;
        data = data18;
        globalLoadGallary();
    });
    btnGirls.click(function () {
        backgraund = galGirls;
        data = dataGirls;
        globalLoadGallary();
    });
    btnCar.click(function () {
        backgraund = galCars;
        data = dataCars;
        globalLoadGallary();
    });
    btnMountains.click(function () {
        backgraund = galMountains;
        data = dataMountains;
        globalLoadGallary();
    });
    btnChernivtsi.click(function () {
        backgraund = galChernivtsi;
        data = dataChernivtsi;
        globalLoadGallary();
    });
    btnMyHobbi.click(function () {
        backgraund = galMyHobbi;
        data = dataMyHobbi;
        globalLoadGallary();
    });
});

