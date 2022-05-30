function pets(input) {
    const numOfDays = Number(input[0]);
    const leftKgFood = Number(input[1]);
    const dailyDogFoodKg = Number(input[2]);
    const dailyCatFoodKg = Number(input[3]);
    const dailyTurtleFoodGr = Number(input[4]);

    const foodForDog = dailyDogFoodKg * numOfDays;
    const foodForCat = dailyCatFoodKg * numOfDays;
    const foodForTurtle = dailyTurtleFoodGr * numOfDays / 1000;

    const totalKgFood = foodForDog + foodForCat + foodForTurtle;
    const diff = Math.abs(leftKgFood - totalKgFood);

    if(leftKgFood >= totalKgFood) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}

pets(["5", "10", "2.1", "0.8", "321"])