function vacation(input) {
  const moneyForTrip = Number(input[0]);
  let currentBudget = Number(input[1]);
  let index = 2;
  let daysSpending = 0;
  let totalDays = 0;

  while (currentBudget < moneyForTrip) {
    let action = input[index];
    index++;
    let amountOfMoney = Number(input[index]);
    totalDays++;
    switch (action) {
      case "spend":
        currentBudget -= amountOfMoney;
        if (currentBudget < 0) {
          currentBudget = 0;
        }
        daysSpending++;
        break;
      case "save":
        currentBudget += amountOfMoney;
        daysSpending = 0;
        break;
    }
    if (daysSpending >= 5) {
      console.log("You can't save the money.");
      console.log(`${totalDays}`);
      break;
    }
    index++;
  }

  if (currentBudget >= moneyForTrip) {
    console.log(`You saved the money for ${totalDays} days.`);
  }
}
vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
