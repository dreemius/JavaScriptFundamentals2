var elementShow = 6,
    start = 5,
    end = 10,
	newArray = [];
	var result = document.getElementById("result");
	newArray = data.filter(function(item,index){
		return (item.id >=start && item.id<=end);
	});
	

	function nameObj(name){
		return name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();
	};
	function descriptionObj(description){
		return description.slice(0, 15);
	};
	function dateObj(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           tmpDate.getMonth() + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
}
 	function changeOptions(){
		for(var i = 0; i<newArray.length;i++){
			newArray[i].name = nameObj(newArray[i].name);
			newArray[i].description = descriptionObj(newArray[i].description);
			newArray[i].date = dateObj(newArray[i].date);
		};
	};	

	 
	function createElement(item){
				var firstDiv = document.createElement('div');
				
					firstDiv.className = "col-sm-3 col-xs-6";
					
				result.appendChild(firstDiv);
				
				var image = document.createElement('img');
				
					image.src = item.url;
					image.alt = item.name;
					image.className = "img-thumbnail";
					
				firstDiv.appendChild(image);
				
				var secondDiv = document.createElement('div');
				
					secondDiv.className = "info-wrapper";
					
				firstDiv.appendChild(secondDiv);
				
				var innerDiv1 = document.createElement('div');
				
					innerDiv1.className = "text-muted"
					innerDiv1.innerHTML = item.id + ":" + item.name;
					
				secondDiv.appendChild(innerDiv1);
				
				var innerDiv2 = document.createElement('div');
				
					innerDiv2.className = "text-muted";
					innerDiv2.innerHTML = item.description;
					
				secondDiv.appendChild(innerDiv2);
				
				var innerDiv3 = document.createElement('div');
				
					innerDiv3.className = "text-muted";
					innerDiv3.innerHTML = item.date;
				
				secondDiv.appendChild(innerDiv3);
	};

function printResult(){
	changeOptions(newArray);
	for(var i = 0; i < elementShow; i++){
	createElement(newArray[i]);
	};
};
printResult();

