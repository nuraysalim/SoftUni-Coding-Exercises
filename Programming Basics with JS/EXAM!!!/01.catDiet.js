function catDiet(input) {
    const perOfFat = Number(input[0]) / 100;
    const perProtein = Number(input[1]) / 100;
    const perCarbohydrates = Number(input[2]) / 100;
    const allCalories = Number(input[3]);
    const perWater = 1 - (Number(input[4]) / 100);

    const gramsFat = (perOfFat * allCalories) / 9;
    const gramsProtein = (perProtein * allCalories) / 4;
    const gramsCarbohydrates = (perCarbohydrates * allCalories) / 4;

    const foodNetWorth = gramsFat + gramsProtein + gramsCarbohydrates;

    const caloriesForAGram = allCalories / foodNetWorth;

    const oneCalorie = caloriesForAGram * perWater;

    console.log(oneCalorie.toFixed(4));
}
catDiet(["20",
"60",
"20", "1800", "50"])

