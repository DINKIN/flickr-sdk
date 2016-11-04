var flickr = require('..')();
var assert = require('assert');

describe('flickr.groups.pools.getContext', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.groups.pools.getContext({ group_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.pools.getContext({ photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.groups.pools.getContext({ photo_id: '_', group_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});