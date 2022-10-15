let expect  = require('chai').assert;
let {isOddOrEven} = require("../02.evenOrOdd");

describe('Testing functionality', ()=> {
    describe('Test isOddOrEven with incorrect values', () => {
        it('Result is undefined with an array argument', () => {
            expect.equal(isOddOrEven([]), undefined);
        });
    
        it('Result is undefined with an object argument', () => {
            expect.equal(isOddOrEven({}), undefined);
        });
    
        it('Result is undefined with parsed number as an argument', () => {
            expect.equal(isOddOrEven(1), undefined);
        });
    
        it('Result is undefined with a boolean argument', () => {
            expect.equal(isOddOrEven(true), undefined);
        });
    });

    describe('Test isOddOrEven with correct values', ()=> {
        it('Result is even with "cats"', ()=> {
            expect.equal(isOddOrEven('cats'), 'even');
        });

        it('Result is odd with "cat"', ()=>{
            expect.equal(isOddOrEven('cat'), 'odd');
        })
    });
});
