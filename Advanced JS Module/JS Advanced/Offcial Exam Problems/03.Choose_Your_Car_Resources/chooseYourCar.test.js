let {assert} = require('chai');
let chooseYourCar = require('./chooseYourCar');

describe("Testing Object", function() {
    describe("Choosing Type", function() {
        it("The year is less than 1900 - throws Error", function() {
            assert.throw(() => {chooseYourCar.choosingType('Sedan', 'red', 1899)}, `Invalid Year!`);
        });

        it("The year is more than 2022 - throws Error", function () {
            assert.throw(() => {chooseYourCar.choosingType('Sedan', 'red', 2023)}, `Invalid Year!`);
        });

        it("When the value of type is different that Sedan - throws Error", function () {
            assert.throw(() => {chooseYourCar.choosingType('Baba', 'red', 2022)}, `This type of car is not what you are looking for.`);
        });

        it("If the year of the car is greater or equal to 2010 - we meet the requirements", function () {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2010), `This red Sedan meets the requirements, that you have.`);
        });

        it("If the year of the car is greater or equal to 2010 - we meet the requirements", function () {
            assert.equal(chooseYourCar.choosingType('Sedan', 'blue', 2015), `This blue Sedan meets the requirements, that you have.`);
        });

        it("If the year of the car is less than 2010 - it's too old", function (){
            assert.equal(chooseYourCar.choosingType('Sedan', 'yellow', 2009), `This Sedan is too old for you, especially with that yellow color.`);
        });

        it("If the year of the car is less than 2010 - it's too old", function (){
            assert.throw(()=>{chooseYourCar.choosingType('Sedan', 'yellow', -2009)});
        });

     });

     describe("Brand Name", function() {
        it("BMW is removed from the array", function (){
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0), "Toyota, Peugeot");
        });

        it("The array has only one car", function(){
            assert.equal(chooseYourCar.brandName(['BMW'], 0), '');
        });

        it("Peugeot is removed from the array", function(){
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2), 'BMW, Toyota');
        });

        it('Passed brands parameter is not an array - throws error', function () {
            assert.throw(()=>{chooseYourCar.brandName('', 2)}, "Invalid Information!");
        });

        it('Passed brands parameter is not an array - throws error', function () {
            assert.throw(()=>{chooseYourCar.brandName({}, 2)}, "Invalid Information!");
        });

        it('Passed brands parameter is not an array - throws error', function () {
            assert.throw(()=>{chooseYourCar.brandName(65, 2)}, "Invalid Information!");
        });

        it('The index is not a number - throws error', function(){
            assert.throw(()=>{chooseYourCar.brandName(['BMW', 'Audi'], "")}, "Invalid Information!");
        });

        it("The index is not a decimal number - throws error", function (){
            assert.throw(()=>{chooseYourCar.brandName(['BMW', 'Audi'], 1.5)}, "Invalid Information!");
        })

        it("The index is outside the limits of the array - throws error", function(){
            assert.throw(()=>{chooseYourCar.brandName(['BMW', 'Audi'], 5)}, "Invalid Information!");
        });

        it("The index is outside the limits of the array - throws error", function(){
            assert.throw(()=>{chooseYourCar.brandName(['BMW', 'Audi'], -6)}, "Invalid Information!");
        });

        it("The index is outside the limits of the array - throws error", function(){
            assert.throw(()=>{chooseYourCar.brandName(['BMW', 'Audi'], 2)}, "Invalid Information!");
        });
     });

     describe("CarFuelConsumption", function() {
        it("distanceInKilometers is not a number - throws error", function(){
            assert.throw(()=>{chooseYourCar.carFuelConsumption("", 126)}, "Invalid Information!");
        });

        it("distanceInKilometers is not a number - throws error", function(){
            assert.throw(()=>{chooseYourCar.carFuelConsumption({}, 126)}, "Invalid Information!");
        });

        it("distanceInKilometers is not a number - throws error", function(){
            assert.throw(()=>{chooseYourCar.carFuelConsumption(true, 126)}, "Invalid Information!");
        });

        it("distanceInKilometers is zero - throws error", function(){
            assert.throw(()=>{chooseYourCar.carFuelConsumption(0, 126)}, "Invalid Information!");
        });

        it("distanceInKilometers is a negative number - throws error", function(){
            assert.throw(()=>{chooseYourCar.carFuelConsumption(-10, 125)}, "Invalid Information!");
        });

        it("distanceInKilometers and ConsumptedFuelInLitres are negative numbers - throws error", function(){
            assert.throw(()=>{chooseYourCar.carFuelConsumption(-10, -125)}, "Invalid Information!");
        });

        it("ConsumptedFuelInLitres is not a number - throws error", function(){
            assert.throw(()=>{chooseYourCar.carFuelConsumption(10, "")}, "Invalid Information!");
        });

        it("ConsumptedFuelInLitres is not a number - throws error", function(){
            assert.throw(()=>{chooseYourCar.carFuelConsumption(10, {})}, "Invalid Information!");
        });

        it("ConsumptedFuelInLitres is not a number - throws error", function(){
            assert.throw(()=>{chooseYourCar.carFuelConsumption(10, false)}, "Invalid Information!");
        });

        it("ConsumptedFuelInLitres is zero - throws error", function(){
            assert.throw(()=>{chooseYourCar.carFuelConsumption(456, 0)}, "Invalid Information!");
        });


        it("ConsumptedFuelInLitres is a negative number - throws error", function(){
            assert.throw(()=>{chooseYourCar.carFuelConsumption(10, -25)}, "Invalid Information!");
        });

        it("Calculate liters per 100 kilometers consumption", function (){
            assert.equal(chooseYourCar.carFuelConsumption(40, 5), `The car burns too much fuel - 12.50 liters!`);
        });

        it("If the liters/100km is less than 7L", function (){
            assert.equal(chooseYourCar.carFuelConsumption(40, 1), `The car is efficient enough, it burns 2.50 liters/100 km.`);
        });

        it("If the liters/100km is equal to 7L", function(){
            assert.equal(chooseYourCar.carFuelConsumption(7, 49), `The car burns too much fuel - 700.00 liters!`)
        });

        it("If the liters/100km is less than 7L", function(){
            assert.equal(chooseYourCar.carFuelConsumption(654, 864), `The car burns too much fuel - 132.11 liters!`)
        });
     });
     
});