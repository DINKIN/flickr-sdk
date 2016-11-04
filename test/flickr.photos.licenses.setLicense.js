var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.licenses.setLicense', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.licenses.setLicense({ license_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "license_id"', function () {

		assert.throws(function () {
			flickr.photos.licenses.setLicense({ photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "license_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.licenses.setLicense({ photo_id: '_', license_id: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});