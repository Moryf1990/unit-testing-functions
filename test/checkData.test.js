var expect = require('chai').expect;
var functions = require('../functions.js');

describe('checkData', function() {
	it('should exist', function() {
		expect(functions.checkData).not.to.be.undefined;
	});
	it('should return true if the input length is "abc"', function() {
		expect(functions.checkData('abc')).to.be.true;
	});
	it('should return false if the input length is "abcd"', function() {
		expect(functions.checkData('abcd')).to.be.false;
	});
	it('should return Invalid Input if the input is a number', function() {
		expect(functions.checkData(Number)).to.throw('Invalid Input');
	});
});