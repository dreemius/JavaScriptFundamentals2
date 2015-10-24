var data = [{
	url: "http://images.miamiandbeaches.com/images/100373_1991_primary.jpg",
	name: "Miami beach",
	id : 1,
	description : " be conveyed to users of assistive technologies – such as",
	date : 1422153200637
},{
	url: "http://krasivye-mesta.ru/img/Eiffel-Tower.jpg",
	name: "Paris",
	id : 2,
	description : "sing color to add meaning to a button",
	date : 1421153200637
},{
	url: "https://pp.vk.me/c312219/v312219280/1cfa/FlceJipJ7Vo.jpg",
	name: "Dubai",
	id : 3,
	description : " be conveyed to users of assistive technologies",
	date : 1426153200637
},{
	url: "http://www.101strana.ru/images/1.png",
	name: "Madagascar",
	id : 4,
	description : "ssistive technologies – such as screen readers. Ensure",
	date : 1428153200637
},{
	url: "http://photo.guru.ua/photo/4/418/4338.jpg",
	name: "My village",
	id : 5,
	description : "color to add meaning to a button only provides",
	date : 1402153200637
},{
	url: "http://cs624527.vk.me/v624527514/3a2e8/WX0hPaCxZ2M.jpg",
	name: "Budda",
	id : 6,
	description : "om the content itself (the visible text of the button)",
	date : 1442153200637
},{
	url: "http://www.bugaga.ru/uploads/posts/2013-11/1385069011_zhivopisnye-mesta-3.jpg",
	name: "Tree",
	id : 7,
	description : "r is either obvious from the content itself",
	date : 1482153200637
},{
	url: "http://i.ytimg.com/vi/gsNoOy3g-rA/maxresdefault.jpg",
	name: "mountains",
	id : 8,
	description : "included through alternative means, such as additional text hidden with the",
	date : 1442153200637
},{
	url: "http://u-news.com.ua/uploads/posts/2012-03/1331224059_2.jpg",
	name: "Ocean",
	id : 9,
	description : " meaning to a button only provides a visual",
	date : 1322153200637
},{
	url: "http://7oom.ru/wp-content/uploads/samye-krasivye-mesta-5.jpg",
	name: "Alpines",
	id : 10,
	description : "uded through alternative means, such as additional",
	date : 1322159200637
}];

var maxHandllerObj=10,
	someObj=0;

var filterEvenObj = function(a){
 
	return ((someObj!==1 && someObj!==2 ) || 
			(someObj==1 && a%2!==0) || 
			(someObj==2 && a%2==0)) 
			|| false;

};
var filterCount = function (id) {
	return id <=maxHandllerObj;
};
var filterByConfig = function () {
	var filtredData = [];
    for (var key in data){
        var id = data[key].id;

        if(filterEvenObj(id) && filterCount(id) ){
            filtredData.push(data[key]);
        }
    }

	return filtredData;
};


var newName = function(oldName){
    oldName = oldName.toLowerCase();
    oldName = oldName[0].toUpperCase()+oldName.slice(1);
    return oldName;
};
var newDescr = function(descr){
    return descr.slice(0,14);
};
var newDate = function(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           tmpDate.getMonth() + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
};


var output = function(filtredData){
   var tmpResult;
    for (var key in filtredData){
        tmpResult =  '<div class="col-sm-3 col-xs-6">\
				<img src="'+ filtredData[key].url + '" alt="'+ newName(filtredData[key].name) + '" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">'+ filtredData[key].id + ' '+ newName(filtredData[key].name) + '</div>\
					<div class="text-muted">'+ newDescr(filtredData[key].description) + '</div>\
					<div class="text-muted">'+ newDate(filtredData[key].date) + '</div>\
				</div>\
			</div>';
        document.getElementById("result").innerHTML += tmpResult;
    }

} ;


var init = function() {
	var filtered = filterByConfig();
	output(filtered);
};

init();
