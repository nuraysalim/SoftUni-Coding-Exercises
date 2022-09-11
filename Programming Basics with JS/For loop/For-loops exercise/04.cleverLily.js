function cleverLily(input) {
    const age = Number(input[0]);
    const washingMachinePrice = Number(input[1]);
    const toyPrice = Number(input[2]);

    let money = 0;
    let tempMoney = 10;
    let toyCount = 0;


    for(let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += tempMoney;
            tempMoney += 10;
            money -= 1;
        } else {
            toyCount++;
        }
    }
    
    money += toyCount * toyPrice;
    const diff = Math.abs(money - washingMachinePrice);

    if (money >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily(["10",
"170.00",
"6"])

