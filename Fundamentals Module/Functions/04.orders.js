function orders(product, quantity) {
  const coffeePrice = 1.5;
  const waterPrice = 1;
  const cokePrice = 1.4;
  const snacksPrice = 2;

  let totalCost;

  switch (product) {
    case "coffee":
      totalCost = coffeePrice * quantity;
      break;
    case "water":
      totalCost = waterPrice * quantity;
      break;
    case "coke":
      totalCost = cokePrice * quantity;
      break;
    case "snacks":
      totalCost = snacksPrice * quantity;
      break;
  }

  console.log(totalCost.toFixed(2));
}
orders("water", 5);
orders("coffee", 2);
