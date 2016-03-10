/**
 * Created by qwerty on 17.12.2015.
 */
$(document).ready(function(){
//подпишемс€ на событие click элемента c id="#launch-modal"
    $('#launch-modal').click(function() {
//активируем контент c id="myModal", как модальное окно
        $('#myModal').modal({
//установим всплывающему окну следующие параметры:
            backdrop: 'static', /* «абыли что это значит?! —мотрим више!)  */
            keyboard: true
        });
    });
});