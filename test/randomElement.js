var expect = require('chai').expect;
var functions = require('../functions.js');

describe('randomElement', function() {
	it('should exist', function() {
		expect(functions.randomElement).not.to.be.undefined;
	});
	it('should throw an exception if the input is not an array', function() {
		expect(function() {functions.randomElement(1,2)}).to.throw('Invalid Input');
	});
	//how to test for random elements. it is checking the array and making sure it is not in the -1 spot (starts at 0)
	it('should return an element from the array that is passed in', function() {
		var elements = ['a', 'd', 'cc'];
		for(var i =0; i <1000; i++){
			var randomEl = functions.randomElement(elements);
			expect(elements.indexOf(randomEl)).to.be.above(-1);
		}
	});	
});