function familyTrip(input) {
  const budget = Number(input[0]);
  const nights = Number(input[1]);
  let pricePerNight = Number(input[2]);
  const perForAdditionalExpences = Number(input[3]);

  if (nights > 7) {
    let discount = pricePerNight * 0.05;
    pricePerNight -= discount;
  }
  let tripCost = nights * pricePerNight;
  let moneyForExpences = (budget * perForAdditionalExpences) / 100;
  let totalSum = tripCost + moneyForExpences;
  let diff = Math.abs(budget - totalSum);

  if (totalSum <= budget) {
    console.log(
      `Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`
    );
  } else {
    console.log(`${diff.toFixed(2)} leva needed.`);
  }
}
//familyTrip(["800.50", "8", "100", "2"]);
familyTrip(["500", "7", "66", "15"]);
