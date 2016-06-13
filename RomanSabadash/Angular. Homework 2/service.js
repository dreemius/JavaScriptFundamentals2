angular.module('informationApp.filter.service', [])
.factory('filterService', function() {
	return {
		information: [
			{name: 'Michael', surname: 'James', birthday: '12.11.1980'},
			{name: 'Linda', surname: 'Smith', birthday: '20.05.1985'},
			{name: 'Michael', surname: 'Cross', birthday: '12.03.1991'},
			{name: 'Charle', surname: 'Pearson', birthday: '05.07.1985'}
		]
	}
});