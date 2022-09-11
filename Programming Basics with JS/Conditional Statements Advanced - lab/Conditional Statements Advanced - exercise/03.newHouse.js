function newHouse(input) {
    const flowerKind = input[0];
    const numOfFlowers = Number(input[1]);
    const budget = Number(input[2]);

    const priceOfRoses = 5;
    const priceOfDahlias = 3.8;
    const priceOfTulips = 2.8;
    const priceOfNarcissus = 3;
    const priceOfGladiolus = 2.5;

    let finalPrice = 0;

    switch(flowerKind) {
        case "Roses": if(numOfFlowers > 80) {
            finalPrice -= numOfFlowers * priceOfRoses * 0.1;
        } 
         finalPrice += numOfFlowers * priceOfRoses;
        break;
        case "Dahlias": if(numOfFlowers > 90) {
            finalPrice -= numOfFlowers * priceOfDahlias * 0.15;
        }
        finalPrice += numOfFlowers * priceOfDahlias;
             break;
        case "Tulips": if(numOfFlowers > 80) {
            finalPrice -= numOfFlowers * priceOfTulips * 0.15;
        }
        finalPrice += numOfFlowers * priceOfTulips;
             break;
        case "Narcissus": if(numOfFlowers < 120) {
            finalPrice += numOfFlowers * priceOfNarcissus * 0.15;
        }
        finalPrice += numOfFlowers * priceOfNarcissus;
             break;
        case "Gladiolus": if(numOfFlowers < 80) {
            finalPrice += numOfFlowers * priceOfGladiolus * 0.2;
        }
        finalPrice += numOfFlowers * priceOfGladiolus;
            break;

    }
    if(budget >= finalPrice) {
        const moneyLeft = (budget - finalPrice).toFixed(2);
        console.log(`Hey, you have a great garden with ${numOfFlowers} ${flowerKind} and ${moneyLeft} leva left.`)
    } else {
        const moneyNeeded = (finalPrice - budget).toFixed(2);
        console.log(`Not enough money, you need ${moneyNeeded} leva more.`)
    }
}
newHouse([])