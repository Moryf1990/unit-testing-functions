var expect = require('chai').expect;
var functions = require('../functions.js');

describe('findMaxDiff', function() {
	it('should exist', function() {
		expect(functions.findMaxDiff).not.to.be.undefined;
	});
	it('should return the largest difference in adjacent integers given an input array', function() {
		expect(functions.findMaxDiff([1,3,8,2])).to.equal(6);
	});
	it('should throw an "Invalid Input" if the input is not an array', function() {
		expect(function() { functions.findMaxOff('hello!') }).to.throw();
	});
});