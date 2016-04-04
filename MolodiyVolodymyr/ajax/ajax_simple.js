function loadMore(){	
//http request
var xmlhttp = new XMLHttpRequest();
var url = "data.js";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

//function  creating object
function myFunction(arr) {
	var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out +=  arr[i].id+"  "+arr[i].description+'<br>'+
		'<img src="' + arr[i].url + '">';
    }
    document.getElementById("id01").innerHTML = out;
	}
}

$('[data-id]').click(function() {
	loadMore();
});