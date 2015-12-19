/**
 * Created by qwerty on 17.12.2015.
 */
// при открытии модального окна
$('#myModal').on('show.bs.modal', function (event) {
// получить кнопку, которая его открыло
    var button = $(event.relatedTarget);
// извлечь информацию из атрибута data-content
    var content = button.data('content');
// вывести эту информацию в элемент, имеющий id="content"
    $(this).find('#content').text(content);
});