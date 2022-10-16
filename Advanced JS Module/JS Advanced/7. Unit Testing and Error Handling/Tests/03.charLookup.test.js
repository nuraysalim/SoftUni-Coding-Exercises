let { expect } = require("chai");
let { lookupChar}  =  require("../03.charLookup");

describe('Test lookup with incorrect type of parameters', ()=> {
    it('Result should be undefined with not string first parameter', ()=>{
        expect(lookupChar(1, 5)).to.be.equal(undefined);
    });

    it('Result should be undefined with string second parameter', ()=> {
        expect(lookupChar('hi', "hello")).to.be.equal(undefined);
    });

    it('Result should be undefined with second parameter which is a decimal number', ()=>{
        expect(lookupChar('hi', 3.5)).to.be.equal(undefined);
    });
});

    describe('Test lookup with correct type of parameters but the value of the index is incorrect', ()=>{
        it('Result should be "Incorrect index" with a negative value of index', ()=> {
            expect(lookupChar('hi', -9)).to.be.equal("Incorrect index");
        });

        it("Result should be 'Incorrect index' with bigger value of index that the string's length", ()=> {
            expect(lookupChar('hi', 100)).to.be.equal("Incorrect index");
        });

        it('Result should be "Incorrect index" with value of index equal to the string`s length', ()=>{
            expect(lookupChar('hi', 2)).to.be.equal("Incorrect index");
        });
    });

    describe('Test lookup with correct type and value of params', ()=>{
        it('Result should return "h" with zero index (lookupChar("hi", 0)', ()=>{
            expect(lookupChar('hi', 0)).to.be.equal('h');
        });

        it('Result should return "i" with last index lookupChar("hi", 1)', ()=>{
            expect(lookupChar('hi', 1)).to.be.equal('i');
        });
    });