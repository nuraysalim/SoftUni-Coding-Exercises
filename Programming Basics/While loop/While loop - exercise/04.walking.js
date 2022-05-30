function walking(input) {
  let index = 0;
  let command = input[index];
  index++
  let endGoal = 10000;

  //(["1500", "300", "2500", "3000", "Going home", "200"])
  while (command !== "Going home") {
    let steps = Number(command);
    endGoal -= steps;

    if (endGoal <= 0) {
      console.log("Goal reached! Good job!");
      console.log(`${Math.abs(endGoal)} steps over the goal!`);
      break;
    }
    command = input[index];
    index++;
  }

  if (command === "Going home") {
    let leftSteps = input[index];
    index++;
    endGoal -= leftSteps;
    if (endGoal <= 0) {
      console.log("Goal reached! Good job!");
      console.log(`${Math.abs(endGoal)} steps over the goal!`);
    } else {
      console.log(`${endGoal} more steps to reach goal.`);
    }
  }
}
walking(["1000",
"1500",
"2000",
"6500"])
;
