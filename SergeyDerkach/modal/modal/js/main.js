var myModal = $('#myModal');
myModal.modal(опции)


.modal(options);
//Активирует содержимое как модальный элемент. Допускает применение дополнительной опции object.
myModal.modal({
    keyboard: false
})
    .modal("toggle");
//Позволяет переключать модальный элемент вручную.
myModal.modal("toggle")
    .modal("show");
// Позволяет открыть модальный элемент вручную.
myModal.modal("show")
    .modal("hide");
//Позволяет скрыть модальный элемент вручную.
myModal.modal("hide");


	myModal.on('hidden',function(){
   	// Создайте тут свое действие на событие
   	});

