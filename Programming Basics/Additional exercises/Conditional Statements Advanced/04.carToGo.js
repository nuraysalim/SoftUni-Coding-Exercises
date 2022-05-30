function carToGo(input) {
    const budget = Number(input[0]);
    const season = input[1];
    let className = "";
    let car = "";
    let price = 0;

    if (budget <= 100) {
        className = "Economy class";
        switch(season) {
            case "Summer": car = "Cabrio";
            price = budget * 0.35; 
            break;
            case "Winter": car = "Jeep";
            price = budget * 0.65;
            break;
        }
    } else if (budget > 100 && budget <= 500) {
        className = "Compact class";
        switch(season) {
            case "Summer": car = "Cabrio";
            price = budget * 0.45;
            break;
            case "Winter": car = "Jeep";
            price = budget * 0.8;
            break;
        }
    } else {
        className = "Luxury class";
        car = "Jeep";
        price = budget * 0.9;
    }

    console.log(className);
    console.log(`${car} - ${price.toFixed(2)}`);
}
carToGo(["1010", "Winter"])