function godzillaVsKong(input) {

    const budget = Number(input[0]);
    const stuntmen = Number(input[1]);
    const priceForClothesPerPerson = Number(input[2]);

    const decorPrice = budget * 0.1
    let totalPriceForClothes = stuntmen * priceForClothesPerPerson;
    
    if (stuntmen > 150) {
        totalPriceForClothes *= 0.9; 
    } 
     const totalMoney = decorPrice + totalPriceForClothes;

    if (totalMoney > budget) {
        let moneyNeeded = totalMoney - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else {
        console.log("Action!")
        let moneyleft = budget - totalMoney
        console.log(`Wingard starts filming with ${moneyleft.toFixed(2)} leva left.`)
    }

}
godzillaVsKong(["9587.88", "222", "55.68"])


