describe('FourSquare Service:', function () {
	beforeEach(module('ANDigitalShowCase'));

	var foursquareService;

	beforeEach(function() {
		inject(function(FoursquareService) {
			foursquareService = FoursquareService;
    	});
	});

    it('FoursquareService should be defined', function() {
	    expect(foursquareService).toBeDefined();
    });

	it('Method FoursquareService should be defined', function() {
		expect(foursquareService.searchVenues).toBeDefined();
  	});

  	it('Method FoursquareService should be defined and return an object', function() {
		expect(foursquareService.searchVenues()).toBeDefined();
  	});
});