function maidenParty(input) {
    const priceOfMaidenParty = Number(input[0]);
    const loveMesseges = Number(input[1]);
    const waxRoses = Number(input[2]);
    const keychain = Number(input[3]);
    const cartoons = Number(input[4]);
    const luckySurprise = Number(input[5]);

    const priceOfLoveM = 0.6;
    const priceOfWaxR = 7.2;
    const priceOfKeyC = 3.6;
    const priceOfCartoons = 18.2;
    const priceOfLuckyS = 22;

    let numOfProducts = loveMesseges + waxRoses + keychain + cartoons + luckySurprise;

    let money = (loveMesseges * priceOfLoveM) + (waxRoses * priceOfWaxR) + 
    (keychain * priceOfKeyC) + (cartoons * priceOfCartoons) + (luckySurprise * priceOfLuckyS);

    if(numOfProducts > 25) {
        let discount = money * 0.35;
        money -= discount;
    }

    const hostingExpences = money * 0.1;

    let finalGain = money - hostingExpences;

    let diff = Math.abs(finalGain - priceOfMaidenParty);

    if(finalGain >= priceOfMaidenParty) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}
maidenParty(["320",
"8",
"2",
"5",
"5",
"1"])
