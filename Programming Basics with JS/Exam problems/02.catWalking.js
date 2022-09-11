function catWalking(input) {
  const walkTime = Number(input[0]);
  const dailyWalks = Number(input[1]);
  const calories = Number(input[2]);

  let burntCalories = walkTime * 5 * dailyWalks;

  if (burntCalories >= calories / 2) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${burntCalories}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${burntCalories}.`
    );
  }
}
catWalking(["30", "3", "600"]);
catWalking(["15", "2", "500"]);
catWalking(["40", "2", "300"]);
