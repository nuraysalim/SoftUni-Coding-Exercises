let { expect } = require('chai');
let mathEnforcer = require('../04.mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
    it('Result should be undefined with a non-number parameter', ()=>{
        expect(mathEnforcer.addFive('Hi')).to.be.equal(undefined);
    });

    it('Result should be 10 when 5 is given as a parameter', ()=>{
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
    });

    it('Result should be 0 when -5 is given as a parameter', ()=>{
        expect(mathEnforcer.addFive(-5)).to.be.equal(0);
    });

    it('Result should be 5.01 when 0.01 is given as a parameter', ()=>{
        expect(mathEnforcer.addFive(0.01)).to.be.closeTo(5.01, 0.01);
    });

    it('Result should be 2.5 when -2.5 is passed as a parameter', ()=>{
        expect(mathEnforcer.addFive(-2.5)).to.be.closeTo(2.5, 0.01);
    })
    });

    describe('subtractTen', ()=>{
        it('Result should be undefined with a non-number parameter', ()=>{
        expect(mathEnforcer.subtractTen('Hi')).to.be.equal(undefined);
        });

        it('Result should be 0 when 10 is given as a parameter', ()=>{
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });

        it('Result should be -10 when 0 is given as a parameter', ()=>{
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
        });

        it('Result should be -20 when -10 is passed as an argument', ()=>{
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });
        
        it('Result should be 0.01 when 10.01 is passed as an argument', ()=>{
            expect(mathEnforcer.subtractTen(10.01)).to.be.closeTo(0.01, 0.01);
        });

        it('Result should be -4.95 when 5.05 is passed as an argument', ()=>{
            expect(mathEnforcer.subtractTen(5.05)).to.be.closeTo(-4.95, 0.01);
        });

    });


    describe('sum', ()=>{
        it('Result should be undefined with a non-number first parameter ', ()=>{
            expect(mathEnforcer.sum('Hi', 5)).to.be.equal(undefined);
            });   
        
        it('Result should be undefined with a non-number second parameter ', ()=>{
           expect(mathEnforcer.sum(5, true)).to.be.equal(undefined);
           });  
           
        it('Result should be the sum of 11 + 11', ()=>{
            expect(mathEnforcer.sum(11, 11)).to.be.equal(22);
        });

        it('Result should be the sum of -3 + 3', ()=>{
            expect(mathEnforcer.sum(-3, 3)).to.be.equal(0);
        });

        it('Result should be the sum of 5 + -5', ()=>{
            expect(mathEnforcer.sum(5, -5)).to.be.equal(0);
        });

        it('Result should be 5 (2.5 + 2.5)', ()=>{
            expect(mathEnforcer.sum(2.5, 2.5)).to.be.closeTo(5, 0.01);
        });

        it('Result should be 3 (-1.5 - 1.5)', ()=>{
            expect(mathEnforcer.sum(-1.5, -1.5)).to.be.closeTo(-3, 0.01);
        });

        it('Resylt should be 5.36 (5.30 + 0.061)', ()=>{
            expect(mathEnforcer.sum(5.30, 0.061)).to.be.closeTo(5.36, 0.01);
        });
    })
})