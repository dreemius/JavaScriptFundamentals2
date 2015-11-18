/*Created by Andrew on 18.11.2015.
 */

//functions for convert initial gallery
function convertName(value) {
    return value[0].toUpperCase() + value.slice(1).toLowerCase();
}

//convert description
function convertDescription(string) {
    return string.slice(0,15);
}

//convert date
function convertDate(date){
    var newDate = new Date(date);
    return newDate.getFullYear() + "/" + (newDate.getMonth()+1) + "/" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes();
}


//filter initial gallery
function convertGallery() {
    var filteredGallery = data.slice(START_POSITION,STOP_POSITION).slice(0,DISPLAYED_IMAGES);
    return filteredGallery.map(function(item) {
        item.name = convertName(item.name);
        item.description = convertDescription(item.description);
        item.date = convertDate(item.date);
        return item;
    })
}
