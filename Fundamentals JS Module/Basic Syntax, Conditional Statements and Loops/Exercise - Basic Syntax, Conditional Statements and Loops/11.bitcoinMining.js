function bitcoinMining(input) {
    let daysCounter = 1;
    let priceOfABitcoin = 11949.16;
    let aGrOfGoldPrice = 67.51;
    let firstDayBoughtBit = 0;
    let bougthBitCoin = 0;
    let moneyFromGold = 0;

    for (let i = 0; i < input.length; i++) {
        let dailyCollectedG = input[i];
        
        if (daysCounter % 3 === 0) {
            dailyCollectedG *= 0.7; 
    	} 

         moneyFromGold += dailyCollectedG * aGrOfGoldPrice;

        if (moneyFromGold >= priceOfABitcoin) {
            if (firstDayBoughtBit === 0) {
            firstDayBoughtBit = daysCounter;
            }
            for (let b = moneyFromGold; b >= priceOfABitcoin; b -= priceOfABitcoin) {
            bougthBitCoin++;
            moneyFromGold -= priceOfABitcoin;
            }
        }

        daysCounter++;
    }

    console.log(`Bought bitcoins: ${bougthBitCoin}`);
    if(bougthBitCoin !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBoughtBit}`);
    }
    console.log(`Left money: ${moneyFromGold.toFixed(2)} lv.`);

}
//bitcoinMining([3124.15, 504.212, 2511.124])
bitcoinMining([50, 100])