var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.setMeta', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.setMeta({});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.setMeta({ photo_id: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});