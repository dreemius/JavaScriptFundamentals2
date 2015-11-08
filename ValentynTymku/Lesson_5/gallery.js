var ROW_ITEMS_COUNT = 4;
var ITEMS_SHOW_COUNT = 1;
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

function itemTemplateReplacer(obj) {
		var itemTemplate = '<div class="col-sm-3 col-xs-6">\
								<img src="$url" alt="$name" class="img-thumbnail">\
								<div class="info-wrapper">\
									<div class="text-muted">$number: $name</div>\
									<div class="text-muted">$description</div>\
									<div class="text-muted">$date</div>\
								</div>\
							</div>';
	return	obj ? itemTemplate
				.replace("$number", obj.id)
				.replace(/\$name/gi, obj.name)
				.replace("$url", obj.url)
				.replace("$description", obj.description)
				.replace("$date", obj.date)
				: false;
}

function printRow(row) {
	var rowTemplate = '<div class="row">$items</div>';
	$('#result').append( row ? rowTemplate.replace("$items", row) + '<br>' : '' ) ;
}

function print(arr, rowsCnt, rowItemsCount) {
	if (arr && rowsCnt && rowItemsCount) {
		for (var i = 0; i < rowsCnt; i++) {
			var rowHTML = "";
			for (var j = i * rowItemsCount; j < i * rowItemsCount + rowItemsCount; j++) {
				rowHTML += arr[j] ? itemTemplateReplacer(arr[j]) : '';
			}
			printRow(rowHTML);
		};
	};
}