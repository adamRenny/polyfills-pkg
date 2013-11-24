/**
 * Test cases pulled from ECMAScript Specifications
 * ECMA-262
 * @see http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
 * 15.3.4.5 Function.prototype.bind (thisArg [, arg1 [, arg2, …]])
 */
var expect = require('expect.js');

Function.prototype.bind = undefined;
require('../src/function.bind');

describe('function.bind', function() {

    function foo(a, b, c) {}
    var obj = {};

    it('must throw a type error if the target parameter object is not callable', function() {

        try {
            var bound = foo.bind.call({});
            expect(false);
        } catch (error) {
            expect(error).to.be.a(TypeError);
        }
    });

    // Will fail due to being unable to change the length
    it('should produce a function with a length equal to the original function', function() {
        var bound = foo.bind(obj);
        expect(bound.length).to.be(foo.length);
    });

    // Will fail due to being unable to change the length
    it('should produce a function with a length with 1 less for each argument as the original with minimum of 0', function() {
        var bound;
        bound = foo.bind(obj, 1);
        expect(bound.length).to.be(foo.length - 1);

        bound = foo.bind(obj, 1, 2);
        expect(bound.length).to.be(foo.length - 2);

        bound = foo.bind(obj, 1, 2, 3);
        expect(bound.length).to.be(foo.length - 3);

        bound = foo.bind(obj, 1, 2, 3, 4);
        expect(bound.length).to.be(0);
    });

    // Will fail due to being unable to change the name
    it('should produce a function with a name the same as the original', function() {
        var a = foo.bind(obj);

        expect(a.name).to.be(foo.name);
    });

    it('should have a length of 1', function() {
        expect(Function.prototype.bind.length).to.be(1);
    });

    it('should be able to run another function with a given scope', function() {
        obj = {};
        function test() { this.foo = true; }

        var boundTest = test.bind(obj);

        boundTest();

        expect(obj.foo).to.be(true);
    });
})