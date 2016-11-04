var flickr = require('..')();
var assert = require('assert');

describe('flickr.urls.lookupGallery', function () {

	it('requires "url"', function () {

		assert.throws(function () {
			flickr.urls.lookupGallery({});
		}, function (err) {
			return err.message === 'Missing required argument "url"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.urls.lookupGallery({ url: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});