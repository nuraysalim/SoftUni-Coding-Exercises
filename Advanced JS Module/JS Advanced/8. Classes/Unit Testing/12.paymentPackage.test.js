let {assert} = require('chai');
let PaymentPackage = require('../12.paymentPackage');

describe("PaymentPackage", () => {
    describe("Testing the constructor", ()=> {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage("Fotev", 10);
        });

        it("Name should be correct", () => {
            assert.equal(paymentPackage._name, "Fotev", "Name is correctly set to Fotev");
        });

        it("Value should be correct", () => {
            assert.equal(paymentPackage._value, 10, "Value is correctly set to 10");
        });

        it("The default value of VAT should be 20", () => {
            assert.equal(paymentPackage._VAT, 20, "The correct default value is 20");
            assert.equal(typeof(paymentPackage._VAT), "number", "VAT's type is number")
        });

        it("The default value of active is boolean", () => {
            assert.equal(paymentPackage._active, true, 'The default value of active should be true');
            assert.equal(typeof(paymentPackage._active), 'boolean', "The type of the value of active should be boolean");
        });
    });
    
    describe("Testing the getters", () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage("Fotev", 10);
        });

        it("Name is correct", () => {
            assert.equal(paymentPackage.name, "Fotev", 'Name should be Fotev');
        });

        it("Value is correct", ()=> {
            assert.equal(paymentPackage.value, 10, 'Value should be equal to 10');
        });

        it("Testing the default value of VAT", ()=>{
            assert.equal(paymentPackage.VAT, 20, 'The default value of VAT shoud be 20');
        });

        it("The active variable should be true", ()=>{
            assert.equal(paymentPackage.active, true);
        });
    });

    describe("Testing the setters", ()=>{
        it("Set incorrect type for name", ()=> {
            assert.throw(()=>{new PaymentPackage(10, 10)}, 'Name must be a non-empty string');
        });

        it("Set empty sting for name", ()=>{
            assert.throw(()=>{new PaymentPackage("", 10)}, 'Name must be a non-empty string');
        });

        it('Set correct type for name', ()=>{
            let paymentPackage = new PaymentPackage('Fotev', 10);
            assert.equal(paymentPackage.name, "Fotev", 'Name should be Fotev');
            paymentPackage.name = 'Hristo'
            assert.equal(paymentPackage.name, 'Hristo', "Name should be set to 'Hristo'")
        });

        it('Set incorrect value', ()=>{
            assert.throw(()=>{new PaymentPackage("Hristo", "Fotev")}, 'Value must be a non-negative number');
        });

        it('Set incorrect value - negative number', ()=>{
            assert.throw(()=>{new PaymentPackage("Hristo", -20)}, 'Value must be a non-negative number');
        });

        it('Set correct type of value', ()=>{
            let paymentPackage = new PaymentPackage('Fotev', 10);
            assert.equal(paymentPackage.value, 10, 'Value should be equal to 10');
            paymentPackage.value = 20;
            assert.equal(paymentPackage.value, 20, 'Value should be equal to 20');
            paymentPackage.value = 0;
            assert.equal(paymentPackage.value, 0);
        });

        it('Set incorrect VAT type', ()=> {
            let paymentPackage = new PaymentPackage('Fotev', 10);
            assert.throw(()=>{paymentPackage.VAT = 'Fotev'}, 'VAT must be a non-negative number');
        });

        it('Set a negative number to VAT', ()=>{
            let paymentPackage = new PaymentPackage('Fotev', 10);
            assert.throw(()=>{paymentPackage.VAT = -20}, 'VAT must be a non-negative number');
        });

        it('Set correct type and value of numbet to VAT', ()=>{
            let paymentPackage = new PaymentPackage('Fotev', 10);
            assert.equal(paymentPackage.VAT, 20);
            paymentPackage.VAT = 30
            assert.equal(paymentPackage.VAT, 30);
        });

        it('Set non-boolean to active', ()=>{
            let paymentPackage = new PaymentPackage('Fotev', 10);
            assert.equal(paymentPackage.active, true);
            
            assert.throw(()=>{paymentPackage.active = '1'}, 'Active status must be a boolean');
        });

        it('Set false value to active', ()=>{
            let paymentPackage = new PaymentPackage('Fotev', 10);
            paymentPackage.active = false;
            assert.equal(paymentPackage.active, false);
        });
    });

    describe('Testing the class method toString', ()=>{
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage("Fotev", 10);
        });

        it("Test active state", ()=>{
            const output = [
                `Package: Fotev`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
              ].join('\n');
              assert.equal(paymentPackage.toString(), output);
        });

        it("Test inactive state", ()=>{
            const output = [
                `Package: Fotev (inactive)`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
              ].join('\n');
              paymentPackage.active = false;
              assert.equal(paymentPackage.toString(), output);

        })
    })
});