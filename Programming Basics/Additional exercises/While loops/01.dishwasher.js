function dishwasher(input) {
    const numOfDetergentBottles = Number(input[0]);
    let amountOfDetergent = numOfDetergentBottles * 750;
    let index = 1;
    let command = input[index];
    index++;
    let plateCounter = 0;
    let potCounter = 0;
    let loadedTimes = 0;

    while(command !== "End") {
        loadedTimes++;
        let numOfDishes = Number(command);
        let usedAmountDetergent = 0;

        if(loadedTimes % 3 !== 0) {
        usedAmountDetergent = numOfDishes * 5;
        amountOfDetergent -= usedAmountDetergent
        plateCounter += numOfDishes; 
    } else if (loadedTimes % 3 === 0) {
            usedAmountDetergent = numOfDishes * 15;
            amountOfDetergent -= usedAmountDetergent
            potCounter += numOfDishes;
        }

        command = input[index];
        index++;

        if(amountOfDetergent < 0) {
            console.log(`Not enough detergent, ${Math.abs(amountOfDetergent)} ml. more necessary!`);
            break;
        } else if (amountOfDetergent == 0 && command !== "End" && command === "undefined") {
            console.log("Detergent was enough!");
            console.log(`${plateCounter} dishes and ${potCounter} pots were washed.`);
            console.log(`Leftover detergent ${amountOfDetergent} ml.`);
            break;
        }

    }
   if(command === "End") {
        console.log("Detergent was enough!");
        console.log(`${plateCounter} dishes and ${potCounter} pots were washed.`);
        console.log(`Leftover detergent ${amountOfDetergent} ml.`);
    }
}
//dishwasher(["2", "53", "65", "55", "End"])
dishwasher([2, 25, 50, 75, 1]);
//dishwasher(["1", "10", "15", "10", "12", "13", "30"])