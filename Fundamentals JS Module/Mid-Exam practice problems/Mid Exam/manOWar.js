function manOWar(input) {
  let pirateShip = input.shift().split(">");
  let warship = input.shift().split(">");
  let maximumHealthCapacity = input.shift();

  let index = 0;
  let command = input[index];
  index++;
  let endOfWar = false;

  while (command !== "Retire") {
    let currCommand = command.split(" ");

    switch (currCommand.shift()) {
      case "Fire":
        let index2 = currCommand[0];
        let damage = currCommand[1];
        let section = warship[index2];

        if (section !== undefined) {
          section -= damage;
          warship[index2] = section;

          if (section <= 0) {
            console.log("You won! The enemy ship has sunken.");
            endOfWar = true;
          }
        }
        break;
      case "Defend":
        let startIndex = currCommand[0];
        let endIndex = currCommand[1];
        let damageOnPirateShip = currCommand[2];

        if (
          pirateShip[startIndex] !== undefined &&
          pirateShip[endIndex] !== undefined
        ) {
          for (let i = startIndex; i <= endIndex; i++) {
            pirateShip[i] -= damageOnPirateShip;

            if (pirateShip[i] <= 0) {
              console.log("You lost! The pirate ship has sunken.");
              endOfWar = true;
              break;
            }
          }
        }
        break;
      case "Repair":
        let repairIndex = currCommand[0];
        let health = Number(currCommand[1]);

        if (pirateShip[repairIndex] !== undefined) {
          if (pirateShip[repairIndex] + health <= maximumHealthCapacity) {
            pirateShip[repairIndex] += health;
          } else {
            pirateShip[repairIndex] = maximumHealthCapacity;
          }
        }
        break;
      case "Status":
        let twentyPerOfMaxHealth = maximumHealthCapacity * 0.2;
        let sectionRepairCounter = 0;
        for (let el of pirateShip) {
          if (el < twentyPerOfMaxHealth) {
            sectionRepairCounter++;
          }
        }
        console.log(`${sectionRepairCounter} sections need repair.`);
        break;
    }

    if (endOfWar) {
      break;
    }

    command = input[index];
    index++;
  }

  if (!endOfWar) {
    let statusOfPirate = 0;
    let statusOfWarship = 0;

    for (let section of pirateShip) {
      statusOfPirate += Number(section);
    }
    for (let section2 of warship) {
      statusOfWarship += Number(section2);
    }

    console.log(`Pirate ship status: ${statusOfPirate}
Warship status: ${statusOfWarship}`);
  }
}
// manOWar(["12>13>11>20>66",
// "12>22>33>44>55>32>18",
// "70",
// "Fire 2 11",
// "Fire 8 100",
// "Defend 3 6 11",
// "Defend 0 3 5",
// "Repair 1 33",
// "Status",
// "Retire"])
manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
