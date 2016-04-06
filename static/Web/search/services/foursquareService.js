'use strict';
var foursquareService = function ($http) {

    var foursquareServiceFactory = {};

    var _searchVenues = function (searchFilter) {

    };

    foursquareServiceFactory.searchVenues = _searchVenues;

    return foursquareServiceFactory;

};

foursquareService.$inject = ['$http'];

app.factory('FoursquareService', foursquareService);