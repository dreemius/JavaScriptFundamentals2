/**
 * Created by krepysh on 13.10.2015.
 */
$(document).ready(function () {
    //constant
    var SPACE = "       ";
    var strike = $('#strikeSame');

    function hideButton() {
        $('#start').css({
            'display': 'none'
        });
    }

    function reloadPage() {
        location.reload(true);
    }

    function bones() {
        var sum_All = 0;
        for (var i = 0; i <= 15; i++) {

            var first = Math.floor((Math.random() * 6) + 1);
            var second = Math.floor((Math.random() * 6) + 1);

            if (first == second) {
                strike.append("Выпал дубль. Число " + first + "<br>")
            }
            if (first == second && first == 1) {
                strike.append("Две единицы" + "<br>")
            }
            if (first == second && first == 6) {
                strike.append("Две шестерки" + "<br>")
            }

            var sum = first + second;
            sum_All += sum;

            $('#DataResult').append("<div>" + "Первая кость:" + SPACE + first + SPACE + "Вторая кость:" + SPACE + second + "Сумма:" + sum + "</div>" + "<br>")
        }

        $('#Summ').append("CУММА:" + sum_All + "<br>");
        var total = 100;

        var review = sum_All >= total ? "Победа, вы набрали" + sum_All + "очков" : "Вы проиграми, у вас" + sum_All + "очков";
        $('#review').append(review + "<br>");

    }

    $('#start').click(function () {
        hideButton();
        bones();
    });
    $('#reload').click(function () {
        reloadPage();
    });

}); //конец ready