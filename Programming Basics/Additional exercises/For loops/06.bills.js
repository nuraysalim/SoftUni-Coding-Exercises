function bills(input) {
    let index = 0;
    const periodOfMonths = Number(input[index]);
    index++;
    const waterBill = 20;
    const internetBill = 15;


    let sumOfElectricityBills = 0;
    let sumOFWaterBills = 0;
    let sumOfInternetBills = 0;
    let sumOfOtherExpences = 0;
    

    for(let i = 1; i <= periodOfMonths; i++) {
        let electricityBill = Number(input[index]);
        index++;
        sumOfElectricityBills += electricityBill; 
        sumOfOtherExpences += (electricityBill + waterBill + internetBill) + ((electricityBill + waterBill + internetBill) * 0.2);
        sumOFWaterBills += waterBill;
        sumOfInternetBills += internetBill;
    
    
    }
    let avgCostPerMonth = (sumOfElectricityBills + sumOFWaterBills + sumOfInternetBills + sumOfOtherExpences) / periodOfMonths;

    console.log(`Electricity: ${sumOfElectricityBills.toFixed(2)} lv`);
    console.log(`Water: ${sumOFWaterBills.toFixed(2)} lv`);
    console.log(`Internet: ${sumOfInternetBills.toFixed(2)} lv`);
    console.log(`Other: ${sumOfOtherExpences.toFixed(2)} lv`);
    console.log(`Average: ${avgCostPerMonth.toFixed(2)} lv`);
}

bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"])