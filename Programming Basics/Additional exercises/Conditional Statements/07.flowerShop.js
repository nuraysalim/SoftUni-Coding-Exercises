function flowerShop(input) {
    const magnoliasPrice = 3.25;
    const hyacinthsPrice = 4;
    const rosesPrice = 3.5;
    const cactusesPrice = 8;

    const numOfMagnolias = Number(input[0]);
    const numOfHyacinths = Number(input[1]);
    const numOfRoses = Number(input[2]);
    const numOfCactuses = Number(input[3]);
    const priceOfPresent = Number(input[4]);

    let totalPriceForBouquet = numOfMagnolias * magnoliasPrice + numOfHyacinths * hyacinthsPrice + numOfRoses * rosesPrice + numOfCactuses * cactusesPrice;
    const taxes = totalPriceForBouquet * 0.05;
    totalPriceForBouquet -= taxes;

    const diff = Math.abs(totalPriceForBouquet - priceOfPresent)

    if (totalPriceForBouquet >= priceOfPresent) {
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }

}

flowerShop(["15", "7", "5", "10", "100"])