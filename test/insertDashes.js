var expect = require('chai').expect;
var functions = require('../functions.js');

describe('insertDashes', function() {
	it('should exist', function() {
		expect(functions.insertDashes).not.to.be.undefined;
	});
	it('should throw an error if anything but a string is passed through', function() {
		expect(function() {functions.insertDashes(40)}).to.throw('Invalid Input');
	});
	it('should return a string', function() {
		expect(functions.insertDashes('noot noot')).to.be.a('string');
	});
	it('should return "h-e-l-l-o w-o-r-l-d" when the string "hello world" is passed through', function() {
		expect(functions.insertDashes('noot noot')).to.equal('n-o-o-t n-o-o-t');
	});
});