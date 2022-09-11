function energyBooster(input) {
  const fruit = input[0];
  const size = input[1];
  const orderedSets = Number(input[2]);

  let totalCosts = 0;
  let price = 0;

  switch (fruit) {
    case "Watermelon":
      switch (size) {
        case "big":
          price = 5 * 28.7;
          totalCosts = orderedSets * price;
          break;
        case "small":
          price = 2 * 56;
          totalCosts = orderedSets * price;
          break;
      }
      break;
    case "Mango":
      switch (size) {
        case "big":
          price = 5 * 19.6;
          totalCosts = orderedSets * price;
          break;
        case "small":
          price = 2 * 36.66;
          totalCosts = orderedSets * price;
          break;
      }
      break;
    case "Pineapple":
      switch (size) {
        case "big":
          price = 5 * 24.8;
          totalCosts = orderedSets * price;
          break;
        case "small":
          price = 2 * 42.1;
          totalCosts = orderedSets * price;
          break;
      }
      break;
    case "Raspberry":
      switch (size) {
        case "big":
          price = 5 * 15.2;
          totalCosts = orderedSets * price;
          break;
        case "small":
          price = 2 * 20;
          totalCosts = orderedSets * price;
          break;
      }
      break;
  }

  if (totalCosts >= 400 && totalCosts <= 1000) {
    let discount = totalCosts * 0.15;
    totalCosts -= discount;
  } else if (totalCosts > 1000) {
    totalCosts /= 2;
  }

  console.log(`${totalCosts.toFixed(2)} lv.`);
}
energyBooster(["Watermelon", "big", "4"]);
energyBooster(["Pineapple", "small", "1"]);
energyBooster(["Raspberry", "small", "50"]);
energyBooster(["Mango", "big", "8"]);
