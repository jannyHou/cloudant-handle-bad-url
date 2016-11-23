var Cloudant = require('cloudant');
var inspect = require('util').inspect;

var goodUrl = 'https://MYUSERNAME:MYPASSWORD@MYACCOUNT.cloudant.com';
Cloudant(goodUrl, function(err, cloudant) {
	console.log('good url test results:');
	// Error is caught properly with well formatted url
	if (err) return console.log(err);
	console.log(inspect(cloudant));
});

var invalidUrl = 'invalid'; // Not parsed properly in cloudant
Cloudant(invalidUrl, function(err, cloudant) {
	// This code is never reached, error is not
	// handled with the callback!
	console.log('invalid url test results:');
	if (err) return console.log(err);
	console.log(inspect(cloudant));
});
