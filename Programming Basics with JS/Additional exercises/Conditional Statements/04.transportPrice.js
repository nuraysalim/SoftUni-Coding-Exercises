function transportPrice(input) {
    const km = Number(input[0]);
    const timeOfDay = input[1];

    if (km >= 100 && (timeOfDay === "day" || timeOfDay === "night")) {
       const trainCost = km * 0.06;
       console.log(trainCost.toFixed(2));
    } else if (km >= 20 && (timeOfDay === "day" || timeOfDay === "night")) {
        const busCost = km * 0.09;
        console.log(busCost.toFixed(2));
    } else if (timeOfDay === "day") {
        const taxiCost = 0.7 + km * 0.79; 
        console.log(taxiCost.toFixed(2))
    } else {
        const taxiCost = 0.7 + km * 0.90; 
        console.log(taxiCost.toFixed(2));
    }

    }

    transportPrice(["5", "day"]);
    transportPrice(["7", "night"]);
    transportPrice(["25", "day"]);
    transportPrice(["180", "night"])