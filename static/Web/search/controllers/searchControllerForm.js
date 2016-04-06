'use strict';
var searchFormController = function ($scope, $q, foursquareService) {

	$scope.searchFilter = "";

	$scope.foursqVenues = [];
	
	$scope.onSearch = function () {
		
	};
	
};

searchFormController.$inject = ['$scope', '$q', 'FoursquareService'];

app.controller('SearchFormController', searchFormController);