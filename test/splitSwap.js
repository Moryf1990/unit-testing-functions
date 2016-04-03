var expect = require('chai').expect;
var functions = require('../functions.js');

describe('splitSwap', function() {
	it('should exist', function() {
		expect(functions.splitSwap).not.to.be.undefined;
	});
	it('should throw an error if the argument is not an array', function() {
		expect(function() {functions.splitSwap('abc')}).to.throw('Invalid Input');
	});
	it('should return an array', function() {
		expect(functions.splitSwap([1, 2, 3])).to.be.an('array');
	});
	it('should return an array equal to [2, 3, 1] if the array [1, 2, 3] is passed through', function() {
		expect(functions.splitSwap([1, 2, 3])).to.deep.equal([2, 3, 1]);
	});
});