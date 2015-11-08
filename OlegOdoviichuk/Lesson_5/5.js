	
// Задание 5!

var ELEMENTS_COUNT = 5;

var newArr = data.splice(5,5);
for(var i = 0;i < ELEMENTS_COUNT;i++){
	newArr[i].name = changeName(newArr[i].name)
	newArr[i].description = changeDescription(newArr[i].description)
	newArr[i].date = createDate(newArr[i].date)
}

function changeName(name) {
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

function changeDescription(description){
	return description.slice(0, 15);
}

function createDate(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           tmpDate.getMonth() + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();

}
console.log(newArr);
			