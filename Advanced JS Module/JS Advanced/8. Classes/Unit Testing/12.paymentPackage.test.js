let {assert} = require('chai');
let Package = require('../12.paymentPackage');

describe("PaymentPackage", () => {
    describe('Testing the constructor', ()=> {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new Package("Fotev", 10);
        });

        it("Name should be correct", () => {
            assert.equal(paymentPackage._name, "Fotev", "Name is correctly set to 'Fotev'");
        });

        it("Value should be correct", () => {
            assert.equal(paymentPackage._value, 10, "Value is correctly set to 10");
        });

        it("The default value of VAT should be 20", () => {
            assert.equal(paymentPackage._VAT, 20, "The correct default value is 20");
            assert.equal(typeof(paymentPackage._VAT), "number", "VAT's type is number")
        });


    })
    
});