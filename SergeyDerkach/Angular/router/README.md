# Demonstration of AngularUI Router

Code and demo for the scotch.io tutorial

[AngularJS Routing Using UI-Router](http://scotch.io/tutorials/javascript/angular-routing-using-ui-router)


1. На главной есть 2 кнопки
2. Первая "Последние поступления"
3. Вторая "Популярные товары"
4. По нажатии каждой из кнопок нужно отобразить свой список данных.
5. У вас должно быть 2 сервиса popularItemsService и lastItemsService Они должны уметь обращаться к главному сервису itemsService вытягивать от туда данные и фильтровать из.
6. В главном сервисе пока что делаете хардкод объекта с данными. Пример структуры
item = {
 name: "HTC",
 price: 12458,
 popular: true,
 date: 1467440203727
}

Таким образом один сервис сможет фильтрануть по проперти popular: true/false
а другой по дате
7. На страничке товара (сейчас about.html можете переименовать в item.html) d правой ui-view выводите просто список всех телефонов. То есть напрямую вызываете itemService

8. Все вызовы сервисов естественно делать из контроллера который принадлежит своему стейту.

9. Разложить код по файлам и папкам