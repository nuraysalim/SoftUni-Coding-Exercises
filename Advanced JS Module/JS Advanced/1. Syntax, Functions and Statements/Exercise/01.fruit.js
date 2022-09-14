function fruit(fruitName, weightInGrams, pricePerKg) {
    const kgBoughtFruit = weightInGrams / 1000;
    const cost = pricePerKg * kgBoughtFruit;
    console.log(`I need $${cost.toFixed(2)} to buy ${kgBoughtFruit.toFixed(2)} kilograms ${fruitName}.`);
}
fruit('orange', 2500, 1.80)