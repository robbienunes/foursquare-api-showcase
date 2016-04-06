# foursquare-api-showcase
A very simple consumer for foursquare api, using Bootstrap, AngularJS, Node.JS and Express

##Install prerequisites:
	1. Google Chrome + LiveReload Extension
	2. Node.js v0.10.x+
	3. npm (which comes bundled with Node) v2.1.0+
	
##Install modules
	1. npm install
	
##Run
	1. Run the express server to serve the static files
		-> grunt build.run
	
	2. Compile in one of the following modes:
		- In "Development" Mode:
			-> grunt build.dev
			(use Google Chrome extension to LiveReload)
			-> grunt build.dev.tests (Optional - To run KARMA/JASMIN tests)
		
		- In "Production" Mode use:
			-> grunt build.pro