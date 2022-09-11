function flowers(input) {
    const boughtChrysanthemums = Number(input[0]);
    const boughtRoses = Number(input[1]);
    const boughtTulips = Number(input[2]);
    const season = input[3];
    const feastday = input[4];

    const arrangingTheBouquet = 2;
    let price = 0;

    switch (season) {
        case "Spring":
        case "Summer":
            price = boughtChrysanthemums * 2  + boughtRoses * 4.1 + boughtTulips * 2.5; break;
        case "Autumn":
        case "Winter":
            price = boughtChrysanthemums * 3.75 + boughtRoses * 4.5 + boughtTulips * 4.15; break; 
    }
    
    switch (feastday) {
        case "Y": price += price * 0.15;
        case "N":
        switch (season) {
        case "Spring": 
            if (boughtTulips > 7) {
                price -= price * 0.05; 
            }
            break;
        case "Winter": 
            if (boughtRoses >= 10) {
                price -= price * 0.1;
            }        
            break;
        }
        if ((boughtChrysanthemums + boughtRoses + boughtTulips) > 20) {
            price -= price * 0.2;
        } 

        } 

        price += arrangingTheBouquet;

        console.log(price.toFixed(2));
}

flowers(["10", "10", "10", "Autumn", "N"])