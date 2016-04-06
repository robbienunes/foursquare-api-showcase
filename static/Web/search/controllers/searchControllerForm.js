'use strict';
var searchFormController = function ($scope, $q, foursquareService) {

	$scope.searchFilter = "Sushi";

	$scope.foursqVenues = [];
	
	$scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
	
	$scope.message = "";
	
	$scope.onSearch = function () {
		foursquareService.searchVenues($scope.searchFilter).then(function (results) {
			$scope.foursqVenues = [];
			var i=0;
			angular.forEach(results.data.response.venues, function(value, key) {
				var obj = {
					'id' : i,
					'name' : value.name,
					'address' : value.location.address,
					'contact' : value.contact.formattedPhone,
					'url' : value.url,
					'fit' : false,
					'coords' : {latitude: value.location.lat, longitude: value.location.lng}
				}
				$scope.foursqVenues.push(obj);
				i++;
			});
		});
	};
	
	$scope.onFit = function (id) {
		angular.forEach($scope.foursqVenues, function(value) {
			if(value.id = id){
				value.fit=true;
			}
		});
	};
};

searchFormController.$inject = ['$scope', '$q', 'FoursquareService'];

app.controller('SearchFormController', searchFormController);