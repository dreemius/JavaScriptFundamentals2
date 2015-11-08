var resultElementsCount = 7;
//var endingArray = data.slice(0, resultElementsCount);
function sliceDescription(description){
	return description.slice(0, 15);
}
function changeName(name){
return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
function createDateObject(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           tmpDate.getMonth() + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
}
var endArray = [];	
for (var i = 0; i<resultElementsCount;i++){
	endArray[i] = data[i];
	endArray[i].name = changeName(endArray[i].name)
	endArray[i].description = sliceDescription(endArray[i].description)
	endArray[i].date = createDateObject(endArray[i].date)
}
console.log(endArray);

		
		

			