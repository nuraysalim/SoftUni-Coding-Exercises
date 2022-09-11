function addBags(input) {
  const priceForOver20KgBaggage = Number(input[0]);
  const kgOfBaggage = Number(input[1]);
  const daysUntilTheTrip = Number(input[2]);
  const numOfBags = Number(input[3]);
  let price = 0;

  if (kgOfBaggage < 10) {
    price = priceForOver20KgBaggage * 0.2;
  } else if (kgOfBaggage >= 10 && kgOfBaggage <= 20) {
    price = priceForOver20KgBaggage / 2;
  } else {
    price = priceForOver20KgBaggage;
  }

  if (daysUntilTheTrip > 30) {
    price += price * 0.1;
  } else if (daysUntilTheTrip >= 7 && daysUntilTheTrip <= 30) {
    price += price * 0.15;
  } else {
    price += price * 0.4;
  }

  let totalPrice = price * numOfBags;

  console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}
addBags(["30", "18", "15", "2"]);
addBags(["25.50", "5", "36", "6"]);
addBags(["63.80", "23", "3", "1"]);
