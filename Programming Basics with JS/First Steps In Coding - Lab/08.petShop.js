function foodForPets(input){
    let dogFoodCost = 2.5;
    let catFoodCost = 4;
    const priceForBoth = (Number(input[0]) * dogFoodCost) + (Number(input[1]) * catFoodCost);
    
    console.log(`${priceForBoth} lv.`) 


}
foodForPets(["5", "4"])