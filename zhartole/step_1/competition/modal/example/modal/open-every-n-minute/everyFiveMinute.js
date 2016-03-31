/**
 * Created by qwerty on 17.12.2015.
 */
$(window).load(function() {
// вызываем метод setInterval, который будет вызывать модальное окно каждые 5 минут, если оно не открыто
    setInterval(function() {
// Если окно не открыто (т.е. не имеет класс in)
        if (!$("#myMmodal").hasClass("in")) {
// то открыть модальное окно
            $("#myModal").modal('show');
        }
    }, 300000);
});