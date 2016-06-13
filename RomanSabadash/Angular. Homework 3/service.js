angular.module('informationApp.filter.service', [])
.factory('filterService', function() {

	var information = [];

	function receiveInformation (newInformation) {
		information.push({
			name: newInformation.name,
			surname: newInformation.surname,
			birthday: newInformation.birthday
		});
		console.log(information);
	}

	function sendInformation () {
		return information;
	}

	return {
		sendInformation: sendInformation,
		receiveInformation: receiveInformation
	}
});