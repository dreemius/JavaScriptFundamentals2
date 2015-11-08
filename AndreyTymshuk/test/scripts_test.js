/**
 * Created by AndreyTymshuk on 11/1/2015.
 */
//------------------------------------OBJECTS--------------------
//Работа с обьктами
document.getElementById("result").innerHTML += '<h1>' + "Работа с обьектами" + "</br>";

//Создание обьекта. Способ 1
var user1 = {
    firstName : "Vasil",
    lastName : "User",
    age : "32"
};

//Создание обьекта. Способ 2
var user2 = new Object();
    user2["firstName"] = "Ivan";
    user2["lastName"] = "Lamer";
    user2["age"] = "27";

//Работа с обьектом через точку
document.getElementById("result").innerHTML += user1.firstName + " " + user1.lastName + " " + user1.age + "<br>";
document.getElementById("result").innerHTML += user2.firstName + " " + user2.lastName + " " + user2.age + "<br>";

//Работа с обьктом через квадратные дужки
document.getElementById("result").innerHTML += user1["firstName"] + " " + user1["lastName"] + " " + user1["age"] + "<br>";
document.getElementById("result").innerHTML += user2["firstName"] + " " + user2["lastName"] + " " + user2["age"] + "<br>";

//Добавим новые свойства
user1.address = "Golovna 56";
document.getElementById("result").innerHTML += user1.address + "<br>";

//Выведем весь масив в консоль и в браузере
console.log(user1);
for (key in user1)
document.getElementById("result").innerHTML += user1[key] + " ";


//--------------------------------------------------------------------------------------------------------------------