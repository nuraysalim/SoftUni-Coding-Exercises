function vacation(input) {
    const budget = Number(input[0]);
    const season = input[1];

    let price = 0;
    let location = "";
    let destination = "";

    if (budget <= 1000) {
        location = "Camp";
        switch(season) {
            case "Summer": destination = "Alaska"; 
            price = budget * 0.65; break;
            case "Winter": destination = "Morocco";
            price = budget * 0.45; break;
        }
    } else if (budget > 1000 && budget <= 3000) {
        location = "Hut";
        switch(season) {
            case "Summer": destination = "Alaska"; 
            price = budget * 0.8; break;
            case "Winter": destination = "Morocco";
            price = budget * 0.6; break;
        }
    } else {
        location = "Hotel"
        switch(season) {
            case "Summer": destination = "Alaska"; 
            price = budget * 0.9; break;
            case "Winter": destination = "Morocco";
            price = budget * 0.9; break;
        }
    }
    console.log(`${destination} - ${location} - ${price.toFixed(2)}`);
}
vacation(["799.50", "Winter"])