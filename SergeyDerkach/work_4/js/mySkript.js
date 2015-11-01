/**
 * Created by krepysh on 13.10.2015.
 */
$(document).ready(function () {
    //constant
    var SPACE = "       ";
    var total = 100;
    var strike = $('#strikeSame');
    var sum_All = 0;
    var sum;

    function hideButton() {
        $('#start').css({
            'display': 'none'
        });
    }

    function sumRandoms(first, second) {
        sum = first + second;
        return sum;
    }

    function sumAll(sum) {
        sum_All += sum;
        return sum_All;
    }

    function getRandom() {
        return Math.floor((Math.random() * 6) + 1);
    }

    function visibleBtnReload() {
        $('#reload').css({
            'display': 'inline-block'
        });
    }

    function reloadPage() {
        location.reload(true);
    }

    function bones1() {
        for (var i = 0; i <= 15; i++) {
            var first = getRandom();
            var second = getRandom();
            sumRandoms(first, second);
            sumAll(sum);
            if (first == second) {
                strike.append("Выпал дубль. Число " + first + "<br>")
            }
            if (first == second && first == 1) {
                strike.append("Две единицы" + "<br>")
            }
            if (first == second && first == 6) {
                strike.append("Две шестерки" + "<br>")
            }
            $('#DataResult').append("<div>" + "Первая кость:" + SPACE + first + SPACE + "Вторая кость:" + SPACE + second + "Сумма:" + sum + "</div>" + "<br>")
        }

        $('#Summ').append("CУММА:" + sum_All + "<br>");
        var review = sum_All >= total ? "Победа, вы набрали" + sum_All + "очков" : "Вы проиграми, у вас" + sum_All + "очков";
        $('#review').append(review + "<br>");
        visibleBtnReload();
    }

    $('#start').click(function () {
        hideButton();
        bones1();
    });
    $('#reload').click(function () {
        reloadPage();
    });
});