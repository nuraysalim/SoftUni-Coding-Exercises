function fuelTank(input) { 
    const fuel = input[0];
    const litresFuel = Number(input[1]);

    if (litresFuel >= 25) {
        if (fuel === "Diesel" || fuel === "Gasoline" || fuel === "Gas") {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
        } else {
            console.log(`Invalid fuel!`);
        }
    } else {
        if (fuel === "Diesel" || fuel === "Gasoline" || fuel === "Gas") {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        } else {
            console.log(`Invalid fuel!`);
        }
    }
}
fuelTank(["Gasoline", "40"])

//Part 2

function fuelTank(input) {
    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;

    const fuel = input[0];
    const litresFuel = Number(input[1]);
    const clubCard = input[2];
    
    if (clubCard === "Yes") {
        gasolinePrice -= 0.18;
        dieselPrice -= 0.12;
        gasPrice -= 0.08;
    }

    let price = 0;

    if (fuel === "Gasoline") {
        price = gasolinePrice * litresFuel;
    } else if (fuel === "Diesel") {
        price = dieselPrice * litresFuel;
    } else if (fuel === "Gas") {
        price = gasPrice * litresFuel;
    }

    if (litresFuel >= 20 && litresFuel <= 25) {
        price -= price * 0.08;
    } else if (litresFuel > 25) {
        price -= price * 0.1;
    }

    console.log(`${price.toFixed(2)} lv.`)
}
fuelTank (["Gasoline", "25", "No"])