var ROW_ITEMS_COUNT = 4;
var ITEMS_SHOW_COUNT = 100;
var FIRST_ITEM_INDEX = 0; //Indexes starts from 0
var LAST_ITEM_INDEX = 55;

var filtredData = filterData(data, { firstItemIndex : FIRST_ITEM_INDEX,
									 lastItemIndex : LAST_ITEM_INDEX,
								 	 itemsShowCount : ITEMS_SHOW_COUNT });
var newData = mapData(filtredData);
var rowsCount = getRowsCount(newData, ROW_ITEMS_COUNT);
var rowHTML = "";

print(newData, rowsCount, ROW_ITEMS_COUNT);

//***************************************************************************************************************

function getRowsCount(arr, row_items_count) {
	if (arr && row_items_count > 0) {
		var rowsCount = arr.length / row_items_count;
		return arr.length % ROW_ITEMS_COUNT > 0 ? rowsCount - (rowsCount % 1) + 1 : rowsCount;
	};
}

function filterData(arr, param) {
	if (arr && param) {
		var maxItemIndex = param.itemsShowCount + param.firstItemIndex - 1;
		return arr.filter(function(item, i) {
			return  ( i >= param.firstItemIndex && i <= param.lastItemIndex && i <= maxItemIndex) ? true : false;
		});
	};
}

function mapData(arr) {
	if (arr) {
		return arr.map(function(obj) {
			obj.name = obj.name.substr(0,1).toLocaleUpperCase() + obj.name.substr(1).toLocaleLowerCase();
			obj.description = obj.description.substr(0,15);
			var date = new Date(obj.date);
			obj.date = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
			return obj;
		});
	};
}

function itemTemplateReplacer(obj) {
	if (obj) {
		var itemTemplate = '<div class="col-sm-3 col-xs-6">\
								<img src="$url" alt="$name" class="img-thumbnail">\
								<div class="info-wrapper">\
									<div class="text-muted">$number: $name</div>\
									<div class="text-muted">$description</div>\
									<div class="text-muted">$date</div>\
								</div>\
							</div>';
	return	itemTemplate
				.replace("$number", obj.id)
				.replace(/\$name/gi, obj.name)
				.replace("$url", obj.url)
				.replace("$description", obj.description)
				.replace("$date", obj.date);
	}
}

function printRow(row) {
	var rowTemplate = '<div class="row">$items</div>';
	$('#result').append(rowTemplate.replace("$items", row));
}

function print(arr, rowsCnt, rowItemsCount) {
	if (arr && rowsCnt && rowItemsCount) {
		for (var i = 0; i < rowsCnt; i++) {
			for (var j = i * rowItemsCount; j < i * rowItemsCount + rowItemsCount; j++) {
				if (arr[j]) {
					rowHTML += itemTemplateReplacer(arr[j]);
				}
			}
		printRow(rowHTML);
		rowHTML = "";
		};
	};
}