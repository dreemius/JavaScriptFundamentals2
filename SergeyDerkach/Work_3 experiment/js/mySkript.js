/**
 * Created by krepysh on 13.10.2015.
 */
//constant



$(document).ready(function () {
    var SPACE = "       ";
    var sum_All = 0;
    var sum=0;
    var strike = $('#strikeSame');
    var DataResult = $('#DataResult');
    var total = 100;
    var start = $('#start');
    var reload = $('#reload');
//Templates
    var first=0;
    var second=0;

    var data = {
        settings: {
            display: 'verticaly|horizontaly'
        },
        data: [
            {
                name: 'Первая кость:'+first
            },
            {
                name: 'Вторая кость:'+second
            },
            {
                name: 'Сумма:'+sum
            }

        ]
    };
    function hideButton() {
        $('#start').css({
            'display': 'none'
        });
    }
    function visibleButton() {
        $('#reload').css({
            'display': 'inline-block'
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
    function randomNumber() {
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
    function bones() {
        for (var i = 0; i <= 15; i++) {
            var block = "";
              first = randomNumber();
              second = randomNumber();
            sumRandoms(first, second);
            sumAll(sum);
            _.each(data.data, function (item) {

                var compiled = _.template($("#item-template").html());
                var html = compiled({name: item.name});
                console.log(html);
                if ('Первая кость:' == html) {
                    data.data[name].append(html + first)
                }
                if ('Вторая кость:' == html) {
                    data.data[name].append(html + second)
                }
                if ('Сумма:' == html) {
                    data.data[name].append(html + sum)
                }
                console.log(data.data[name]);
                block += html;

                //console.log(block);
            });


            if (first == second) {
                strike.append("Выпал дубль. Число " + first + "<br>")
            }
            if (first == second && first == 1) {
                strike.append("Две единицы" + "<br>")
            }
            if (first == second && first == 6) {
                strike.append("Две шестерки" + "<br>")
            }
            $(".container").append("<ul>" + block+ "</ul>" + '<br>');



        }
        $('#Summ').append("CУММА:" + sum_All + "<br>");
        var review = sum_All >= total ? "Победа, вы набрали" + sum_All + "очков" : "Вы проиграми, у вас" + sum_All + "очков";
        $('#review').append(review + "<br>");
        visibleBtnReload();
    }


/*
    function bones1() {
        for (var i = 0; i <= 15; i++) {
            var first = randomNumber();
            var second = randomNumber();
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

            DataResult.append("<div>" + "Первая кость:" + SPACE + first + SPACE + "Вторая кость:" + SPACE + second + "Сумма:" + sum + "</div>" + "<br>")
        }
        sumAll();
        $('#Summ').append("CУММА:" + sum_All + "<br>");
        var review = sum_All >= total ? "Победа, вы набрали" + sum_All + "очков" : "Вы проиграми, у вас" + sum_All + "очков";
        $('#review').append(review + "<br>");

}
*/



    start.click(function () {
        hideButton();
        bones();
    });
    console.log(start.click);


    reload.click(function () {
        visibleButton();
        reloadPage();});


}); //конец ready