// Load 3rd Party Libs + Controllers
var express = require('express');

// Create our Express application
var app = express();

// Set front-end resources
app.use(express.static('static'));

// Redirect all unmatched requests to index.html
app.get('*', function(req, res){
  res.sendfile('./static/index.html');
});

// Start the server
app.listen(3000);