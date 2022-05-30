function fishingBoat(input) {
  const priceForSpring = 3000;
  const priceForSummerAndAutumn = 4200;
  const priceForWinter = 2600;

  const budget = Number(input[0]);
  const season = input[1];
  const fishermanCount = Number(input[2]);

  let totalMoney = 0;

  switch (season) {
    case "Spring":
      totalMoney = priceForSpring;
      break;
    case "Summer":
    case "Autumn":
      totalMoney = priceForSummerAndAutumn;
      break;
    case "Winter":
      totalMoney = priceForWinter;
      break;
  }
  if (fishermanCount <= 6) {
    totalMoney -= totalMoney * 0.1;
  } else if (fishermanCount >= 7 && fishermanCount <= 11) {
    totalMoney -= totalMoney * 0.15;
  } else {
    totalMoney -= totalMoney * 0.25;
  }

  if (fishermanCount % 2 === 0 && season != "Autumn") {
    totalMoney -= totalMoney * 0.05;
  }

  const finalMoney = Math.abs(budget - totalMoney)
  if (budget >= totalMoney) {
    console.log(`Yes! You have ${finalMoney.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${finalMoney.toFixed(2)} leva.`);
  }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);
