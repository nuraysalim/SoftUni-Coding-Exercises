function battleWithEasternEggs(input) {
  let eggsOfPlayerOne = Number(input[0]);
  let eggsOfPlayerTwo = Number(input[1]);

  let index = 2;
  let command = input[index];
  index++;

  while (command !== "End of battle") {
    if (command === "one") {
      eggsOfPlayerTwo--;
    } else {
      eggsOfPlayerOne--;
    }

    if (eggsOfPlayerOne === 0) {
      console.log(
        `Player one is out of eggs. Player two has ${eggsOfPlayerTwo} eggs left.`
      );
      break;
    } else if (eggsOfPlayerTwo === 0) {
      console.log(
        `Player two is out of eggs. Player one has ${eggsOfPlayerOne} eggs left.`
      );
      break;
    }

    command = input[index];
    index++;
  }

  if (command === "End of battle") {
    console.log(`"Player one has ${eggsOfPlayerOne} eggs left.`);
    console.log(`Player two has ${eggsOfPlayerTwo} eggs left.`);
  }
}
//battleWithEasternEggs([ "5", "4", "one", "two", "one", "two", "two", "End of battle"]);
//battleWithEasternEggs(["2","6","one","two","two"]);
battleWithEasternEggs(["6", "3", "one", "two", "two", "one", "one"]);
