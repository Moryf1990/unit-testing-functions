var expect = require('chai').expect;
var functions = require('../functions.js');

describe('mySubstring', function() {
	it('should exist', function() {
		expect(functions.mySubstring).not.to.be.undefined;
	});
	it('should return the substring of the input string between the given index values', function() {
		expect(functions.mySubstring('testword', 1, 5)).to.equal('estwo');
	});
	it('should throw an "Invalid Input" if the input is not a string (number test)', function() {
		expect(function() { functions.mySubstring(1) }).to.throw();
	});
	it('should throw an "Invalid Input" if the input is not a string (array test)', function() {
		expect(function() { functions.mySubstring([1,2,3]) }).to.throw();
	});
});

