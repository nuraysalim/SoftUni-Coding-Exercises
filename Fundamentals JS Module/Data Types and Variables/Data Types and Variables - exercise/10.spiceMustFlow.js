function spiceMustFlow(startingYield) {
    let totalAmount = 0;
    let dayCounter = 0;
    for (let i = startingYield; i >= 100; i -= 10) {
        totalAmount += startingYield;
        startingYield -= 10;
        if (totalAmount >= 26) {
            totalAmount -= 26;
        }
        dayCounter++;
    }
    
    if (startingYield < 100 && totalAmount >= 26) {
        totalAmount -= 26;
    }
    console.log(dayCounter);
    console.log(totalAmount);
}
spiceMustFlow(111)
//spiceMustFlow(450)