function toyShop(input) {
    const puzzlePrice = 2.6;
    const speakingDollPrice = 3;
    const tedddyBearPrice = 4.1;
    const minionPrice = 8.2;
    const truckPrice = 2;

    const vacationPrice = Number(input[0]);
    const puzzleCount = Number(input[1]);
    const speakingDollCount = Number(input[2]);
    const teddyBearCount = Number(input[3]);
    const minionCount = Number(input[4]);
    const truckCount = Number(input[5]);
    
    const toyCount = puzzleCount + speakingDollCount + teddyBearCount + minionCount + truckCount;
     let totalCost = puzzleCount * puzzlePrice + speakingDollCount * speakingDollPrice + teddyBearCount * tedddyBearPrice + minionCount * minionPrice + truckCount * truckPrice; 

     if (toyCount >= 50) {
         totalCost *= 0.75;
     }

     totalCost *= 0.9;

     const difference = Math.abs(totalCost - vacationPrice)

     if (totalCost >= vacationPrice) {
         console.log(`Yes! ${difference.toFixed(2)} lv left.`)
     } else {
         console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`)
     }
}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])


