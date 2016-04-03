var expect = require('chai').expect;
var functions = require('../functions.js');

describe('sumSquares', function() {
	it('should exist', function() {
		expect(functions.sumSquares).not.to.be.undefined;
	});
	it('should throw an error if the argument is not a number', function() {
		expect(function() {functions.sumSquares('abc')}).to.throw('Invalid Input');
	});
	it('should return a number', function() {
		expect(functions.sumSquares(5)).to.be.a('number');
	});
	it('should return 5 when the argument 2 is passed', function() {
		expect(functions.sumSquares(2)).to.equal(5);
	});
	it('should equal 55 when the argument 5 is passed', function() {
		expect(functions.sumSquares(5)).to.equal(55);
	});
});