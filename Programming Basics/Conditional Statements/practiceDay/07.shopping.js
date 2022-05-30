function shopping(input) {
    const petersBudget = Number(input[0]);
    const numberOfVideoCards = Number(input[1]);
    const numberOfProcessor = Number(input[2]);
    const numberOfRam = Number(input[3]);

    const videoCard = 250;
    const videoCardsCost = videoCard * numberOfVideoCards
    const processor = videoCardsCost * 0.35;
    const processorCost = processor * numberOfProcessor; 
    const ram = videoCardsCost * 0.1;
    const ramCost = ram * numberOfRam;
    let totalCosts = videoCardsCost + processorCost + ramCost;
     
    if (numberOfVideoCards > numberOfProcessor) {
        totalCosts *= 0.85;
    }
    const moneyLeftOrNeeded = Math.abs(totalCosts - petersBudget);

    if (totalCosts <= petersBudget) {
        console.log(`You have ${(moneyLeftOrNeeded).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(moneyLeftOrNeeded).toFixed(2)} leva more!`)
    }
}
shopping(["900",
"2",
"1",
"3"])

