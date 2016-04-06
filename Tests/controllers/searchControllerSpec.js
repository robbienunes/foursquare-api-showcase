// SPECS
describe('Controlador Search:', function () {
	beforeEach(module('ANDigitalShowCase'));

	var scope, controller, foursquareService;

	describe('Define controller and methods', function () {
		beforeEach(function() {
			inject(function($rootScope, $controller) {
				scope = $rootScope.$new();
				foursquareService = {
					searchVenues : function(name) {return {};}
				};
	            controller = $controller('SearchFormController', {
	                '$scope': scope,
	                'FoursquareService' : foursquareService
	            });
			});
		});
	    it('SearchController should be defined', function() {
		      expect(controller).toBeDefined();
	    });
	    it('Venues should exist', function() {
		      expect(scope.foursqVenues).not.toBeNull();
	    });
		it('Filter should exist', function() {
		      expect(scope.searchFilter).not.toBeNull();
	    });
		it('Search method should exist', function() {
		      expect(scope.onSearch).toBeDefined();
	    });
	});

});




