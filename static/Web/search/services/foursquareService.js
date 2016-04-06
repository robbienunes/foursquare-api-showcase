'use strict';
var foursquareService = function ($http) {

    var foursquareServiceFactory = {};

    var _searchVenues = function (searchFilter) {
		var params = 'client_id=DVXOFIUMW33U5R0MD1T3OPDI40P0LKLDSMSZYFERGFIKJBZ2&client_secret=3AEED4TFGKKPIPHK305K4Z15YWJC3O4JFQCFMHCCXH1WE45H&near=London, UK&v=20160405&limit=5&query='+searchFilter;
		
		return $http.post('https://api.foursquare.com/v2/venues/search', params, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
           return response;
        }).error(function (err, status) {
           return err;
        });
    };

    foursquareServiceFactory.searchVenues = _searchVenues;

    return foursquareServiceFactory;

};

foursquareService.$inject = ['$http'];

app.factory('FoursquareService', foursquareService);