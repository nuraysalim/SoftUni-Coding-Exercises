let {expect}  = require('chai');
let {isOddOrEven} = require("../02.evenOrOdd");

describe('Testing functionality', ()=> {
    describe('Test isOddOrEven with incorrect values', () => {
        it('Result is undefined with an array argument', () => {
            expect(isOddOrEven([])).to.equal(undefined);
        });
    
        it('Result is undefined with an object argument', () => {
            expect(isOddOrEven({})).to.equal(undefined);
        });
    
        it('Result is undefined with parsed number as an argument', () => {
            expect(isOddOrEven(1)).to.equal(undefined);
        });
    
        it('Result is undefined with a boolean argument', () => {
            expect(isOddOrEven(false)).to.equal(undefined);
        });
    });

    describe('Test isOddOrEven with correct values', ()=> {
        it('Result is even with "cats"', ()=> {
            expect(isOddOrEven('cats')).to.equal('even');
        });

        it('Result is odd with "cat"', ()=>{
            expect(isOddOrEven('cat')).to.equal('odd');
        })
    });
});
