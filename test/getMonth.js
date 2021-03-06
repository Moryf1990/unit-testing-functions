var expect = require('chai').expect;
var functions = require('../functions.js');

describe('getMonth', function() {
	it('should exist', function() {
		expect(functions.getMonth).not.to.be.undefined;
	});
	it('should throw an exception if the argument passed in is greater than 12 or less than 1', function() {
		expect(function() {functions.getMonth(13) }).to.throw('Invalid Input: number can not be higher than 12 or less than 1');
	})
	it('should return a string', function() {
		expect(functions.getMonth(6)).to.equal('June');
	});
});