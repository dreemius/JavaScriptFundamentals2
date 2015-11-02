var ROW_ITEMS_COUNT = 4;
var ITEMS_SHOW_COUNT = 100;
var FIRST_ITEM_INDEX = 0; //Indexes starts with 0
var LAST_ITEM_INDEX = 55;

var filtredData = getFiltredData(data, { firstItemIndex : FIRST_ITEM_INDEX,
									 		lastItemIndex : LAST_ITEM_INDEX,
								 	 		itemsShowCount : ITEMS_SHOW_COUNT });
var newData = getMappedData(filtredData);
var rowsCount = getRowsCount(newData, ROW_ITEMS_COUNT);
print(newData, rowsCount, ROW_ITEMS_COUNT);

//***************************************************************************************************************

function getRowsCount(arr, row_items_count) {
	if (arr && row_items_count > 0) {
		var rowsCount = arr.length / row_items_count;
		return arr.length % ROW_ITEMS_COUNT > 0 ? rowsCount - (rowsCount % 1) + 1 : rowsCount;
	};
}

function getDate(timestamp) {
	if (timestamp) {
		var date = new Date(timestamp);
		return date.getFullYear() + "/" + 
		(date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1) + "/" + 
		(date.getDate() < 10 ? '0' : '') + date.getDate() + " " +
		(date.getHours() < 10 ? '0' : '') + date.getHours() + ":" +
		(date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
	};
}

function getFiltredData(arr, param) {
	if (arr && param) {
		var maxItemIndex = param.itemsShowCount + param.firstItemIndex - 1;
		return arr.filter(function(item, i) {
			return  ( i >= param.firstItemIndex && i <= param.lastItemIndex && i <= maxItemIndex) ? true : false;
		});
	};
}

function getMappedData(arr) {
	return arr ? arr.map(function(obj) {
			obj.name = obj.name.substr(0,1).toLocaleUpperCase() + obj.name.substr(1).toLocaleLowerCase();
			obj.description = obj.description.substr(0,15);
			obj.date = getDate(obj.date);
			return obj;
		}) : false;
}

function createElement(tag, attributes, _innerHTML) {
	var element = document.createElement(tag);
	if (attributes) {
		for (var attr in attributes) {
			element.setAttribute(attr, attributes[attr]);
		}
	};
	element.innerHTML =  _innerHTML ? _innerHTML : '';
	return element;
}

function createItem(obj) {
	var childItem = createElement('div', {'class' : 'info-wrapper'});
	childItem.appendChild(createElement('div', {'class' : 'text-muted'}, obj.id + ": " + obj.name));
	childItem.appendChild(createElement('div', {'class' : 'text-muted'}, obj.description));
	childItem.appendChild(createElement('div', {'class' : 'text-muted'}, obj.date));

	var item = createElement('div', {'class' : 'col-sm-3 col-xs-6'});
	item.appendChild(createElement('img', {'src' : obj.url, 'alt' : obj.name, 'class' : 'img-thumbnail'}));
	item.appendChild(childItem);
	return item;
}

function createRow(itemsArray) {
	var row = createElement('div', {'class' : 'row'}, '<br>');
	itemsArray.forEach(function(item){
		row.appendChild(item);
	});
	return row;
}

function print(arr, rowsCnt, rowItemsCount) {
	if (arr && rowsCnt && rowItemsCount) {
		for (var i = 0; i < rowsCnt; i++) {
			var itemsArray = [];
			for (var j = i * rowItemsCount; j < i * rowItemsCount + rowItemsCount; j++) {
				arr[j] ? itemsArray.push(createItem(arr[j])) : false;
			}
			result.appendChild(createRow(itemsArray));
		};
	};
}