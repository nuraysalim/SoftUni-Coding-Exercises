function train(input) {
  let passengersInWagons = input.shift().split(" ").map(Number);
  let maxCapacityOfWagon = input.shift();
  let index = input.length;

  for (let i = 0; i < index; i++) {
    let command = input[i].split(" ");

    if (command[0] == "Add") {
      passengersInWagons.push(command[1]);
    } else {
      for (let j = 0; j < passengersInWagons.length; j++) {
        if (passengersInWagons[j] + Number(command) <= maxCapacityOfWagon) {
          passengersInWagons[j] += Number(command);
          break;
        }
      }
    }
  }

  console.log(passengersInWagons.join(" "));
}
//train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
