/**
 * Test cases pulled from ECMAScript Specifications
 * ECMA-262
 * @see http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
 * 15.4.4.14 Array.prototype.indexOf (searchElement[, fromIndex])
 */
var expect = require('expect.js');

Array.prototype.indexOf = undefined;
require('../src/array.indexOf');

describe('array.indexOf', function() {

    var foo = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

    it('should return -1 when an empty array is provided', function() {
        expect([].indexOf(1)).to.be(-1);
    });

    it('should return -1 when the fromIndex is greater than or equal to the length', function() {
        expect(foo.indexOf(1, foo.length)).to.be(-1);

        expect(foo.indexOf(1, foo.length + 1)).to.be(-1);
    });

    it('should find the first index of a number', function() {
        expect(foo.indexOf(1)).to.be(0);
        expect(foo.indexOf(2)).to.be(1);
        expect(foo.indexOf(3)).to.be(2);
        expect(foo.indexOf(4)).to.be(3);
        expect(foo.indexOf(5)).to.be(4);
        expect(foo.indexOf(6)).to.be(5);
    });

    it('should find the first index of a number from a beginning search index', function() {
        expect(foo.indexOf(1, 1)).to.be(8);
        expect(foo.indexOf(2, 2)).to.be(9);
        expect(foo.indexOf(3, 3)).to.be(10);
        expect(foo.indexOf(4, 4)).to.be(11);
        expect(foo.indexOf(5, 5)).to.be(12);
        expect(foo.indexOf(6, 6)).to.be(13);
    });

    it('should search from the start if a non-number is provided', function() {
        expect(foo.indexOf(3, Math.NaN)).to.be(2);
        expect(foo.indexOf(3, '10px')).to.be(2);
        expect(foo.indexOf(3, {})).to.be(2);
        expect(foo.indexOf(3, function() {})).to.be(2);
        expect(foo.indexOf(3, null)).to.be(2);
        expect(foo.indexOf(3, undefined)).to.be(2);
        expect(foo.indexOf(3, false)).to.be(2);
        expect(foo.indexOf(3, true)).to.be(2);
    });

    it('should return -1 if an element can\'t be found', function() {
        expect(foo.indexOf(null)).to.be(-1);
        expect(foo.indexOf(0)).to.be(-1);
        expect(foo.indexOf(-1)).to.be(-1);
    });

    it('should search the number of indices from the length', function() {
        expect(foo.indexOf(1, -8)).to.be(8);
    });

    it('should search the number of indices from the length', function() {
        expect(foo.indexOf(1, -8)).to.be(8);
    });
});