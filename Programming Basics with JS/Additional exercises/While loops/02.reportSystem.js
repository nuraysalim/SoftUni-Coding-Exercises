function reportSystem(input) {
    let desiredSum = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let cashOrDebitCard = 0;
    let cash = 0;
    let card = 0;
    let paidWithCashCounter = 0;
    let paidWithCardCounter = 0;
    while(command !== "End") {
        let money = Number(command);
        if(cashOrDebitCard % 2 === 0 && money <= 100) {
            cash += money
            desiredSum -= money;
            paidWithCashCounter++;
            console.log("Product sold!")
        } else if (cashOrDebitCard % 2 !== 0 && money >= 10) {
            card += money
            desiredSum -= money;
            paidWithCardCounter++;
            console.log("Product sold!");
        } else {
            console.log("Error in transaction!");
        }
        if (desiredSum <= 0 ) {
            let avgCash = cash / paidWithCashCounter;
            let avgCard = card / paidWithCardCounter;
            console.log(`Average CS: ${avgCash.toFixed(2)}`);
            console.log(`Average CC: ${avgCard.toFixed(2)}`);
            break;
        }
        
        command = input[index];
        index++;
        cashOrDebitCard++;
    }
    if(command === "End") {
        console.log("Failed to collect required money for charity.");
    }
}
//reportSystem(["500", "120", "8", "63", "256", "78", "317"])
reportSystem(["600", "86", "150", "98", "227", "End"])