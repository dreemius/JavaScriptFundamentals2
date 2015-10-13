/**
 * Created by krepysh on 13.10.2015.
 */
$(document).ready(function(){

//
    $('#result').click(function () {
    var sum_All=0;
        for (var i = 0; i <= 15; i++) {


            var first = Math.floor((Math.random() * 6) + 1);
            var second = Math.floor((Math.random() * 6) + 1);
            if(  first==second ){$('#strikeSame').append("Выпал дубль. Число "+first + "<br>")}
            if(  first==second&& first== 1 ){$('#strikeSame').append("Две единицы" + "<br>")}
            if(  first==second&& first== 6 ){$('#strikeSame').append("Две шестерки" + "<br>")}
            var sum;
              sum= first+second;

            sum_All =sum+sum_All;


            $('#DataResult').append("<div>"+"Первая кость:"+ "       "  + first + "       " + "Вторая кость:"+ "       "  + second + "Сумма:" + sum +"</div>"+ "<br>")
        }

        $('#Summ').append("CУММА:"+sum_All + "<br>");
        // условие ? выражение 1(если условие true) : выражение 2(если условие false);
var total=100;

   var review =  sum_All>=total ? "Победа, вы набрали" +sum_All +"очков": "Вы проиграми, у вас"+ sum_All+ "очков";
        $('#review').append(review+"<br>");







        //Кнопки

        $('#result').css({
                'display': 'none'});
        $('#reload').css({
            'display': 'inline-block'});


    });
//Перезагрузка страницы
    $('#reload').click(function () {
        location.reload(true);
    });


});//конец ready