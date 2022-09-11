function birthdayParty(input) {
  const rentOfHall = Number(input[0]);

  const cake = rentOfHall * 0.2;
  const drinks = cake * 0.55;
  const animator = rentOfHall / 3;

  const totalNeededBudget = rentOfHall + cake + drinks + animator;

  console.log(totalNeededBudget);
}
birthdayParty(["3720"]);
