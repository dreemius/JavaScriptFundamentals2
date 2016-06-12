angular.module('informationApp.filter', [
		'informationApp.filter.ctrl',
		'informationApp.filter.service',
		'informationApp.filter.directive'
	]);

angular.module('informationApp', ['informationApp.filter']);