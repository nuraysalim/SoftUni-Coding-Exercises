function aluminumJoinery(input) {
  const numOfJoinery = Number(input[0]);
  const kindOfJoinery = input[1];
  const wayOfReceivment = input[2];

  let price = 0;
  let cost = 0;

  

  switch (kindOfJoinery) {
    case "90X130":
      cost = 110;
      price = cost * numOfJoinery;
      if (numOfJoinery > 30 && numOfJoinery <= 60) {
        price -= price * 0.05;
      } else if (numOfJoinery > 60) {
        price -= price * 0.08;
      }
      break;
    case "100X150":
      cost = 140;
      price = cost * numOfJoinery;
      if (numOfJoinery > 40 && numOfJoinery <= 80) {
        price -= price * 0.06;
      } else if (numOfJoinery > 80) {
        price -= price * 0.1;
      }
      break;
    case "130X180":
      cost = 190;
      price = cost * numOfJoinery;
      if (numOfJoinery > 20 && numOfJoinery <= 50) {
        price -= price * 0.07;
      } else if (numOfJoinery > 50) {
        price -= price * 0.12;
      }
      break;
    case "200X300":
      cost = 250;
      price = cost * numOfJoinery;
      if (numOfJoinery > 25 && numOfJoinery <= 50) {
        price -= price * 0.09;
      } else if (numOfJoinery > 50) {
        price -= price * 0.14;
      }
      break;
  }

  switch (wayOfReceivment) {
    case "With delivery":
      price += 60;
      break;
  }

  if (numOfJoinery > 99) {
    price -= price * 0.04;
  }
  if (numOfJoinery < 10) {
    console.log("Invalid order");
  } else {
  console.log(`${price.toFixed(2)} BGN`);
} 
}
aluminumJoinery(["40", "90X130", "Without delivery"]);
aluminumJoinery(["105", "100X150", "With delivery"]);
aluminumJoinery(["2", "130X180", "With delivery"]);
