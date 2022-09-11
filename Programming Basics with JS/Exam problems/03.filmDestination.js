function filmDestination(input) {
  const budget = Number(input[0]);
  const destination = input[1];
  const season = input[2];
  const days = Number(input[3]);

  let price = 0;

  switch (destination) {
    case "Dubai":
      switch (season) {
        case "Winter":
          price = 45000 * days;
          break;
        case "Summer":
          price = 40000 * days;
          break;
      }
      let discount = price * 0.3;
      price -= discount;
      break;
    case "Sofia":
      switch (season) {
        case "Winter":
          price = 17000 * days;
          break;
        case "Summer":
          price = 12500 * days;
          break;
      }
      let tax = price * 0.25;
      price += tax;
      break;
    case "London":
      switch (season) {
        case "Winter":
          price = 24000 * days;
          break;
        case "Summer":
          price = 20250 * days;
          break;
      }
      break;
  }

  let diff = Math.abs(budget - price);

  if (budget >= price) {
    console.log(
      `The budget for the movie is enough! We have ${diff.toFixed(
        2
      )} leva left!`
    );
  } else {
    console.log(`The director needs ${diff.toFixed(2)} leva more!`);
  }
}
//filmDestination(["400000", "Sofia", "Winter", "20"]);
filmDestination(["1000000", "Dubai", "Summer", "5"]);
//filmDestination(["200000", "London", "Summer", "7"]);
