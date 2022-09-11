function bestPlayer(input) {
  let index = 0;
  let command = input[index];
  index++;

  let nameOfPlayer = "";
  let scoredGoals = 0;

  while (command !== "END") {
    let tempNameOfPlayer = command;
    let tempScoredGoals = Number(input[index]);
    index;

    if (scoredGoals < tempScoredGoals) {
      scoredGoals = tempScoredGoals;
      nameOfPlayer = tempNameOfPlayer;
    }

    if (tempScoredGoals >= 10) {
      scoredGoals = tempScoredGoals;
      nameOfPlayer = tempNameOfPlayer;
      break;
    }

    command = input[index];
    index++;
  }

  console.log(`${nameOfPlayer} is the best player!`);
  if (scoredGoals >= 3) {
    console.log(`He has scored ${scoredGoals} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${scoredGoals} goals.`);
  }
}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva", "5", "Harry Kane", "10"]);
bestPlayer(["Petrov", "2", "Drogba", "11"]);
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
