function treasureHunt(input) {
  let insideTheChest = input.shift().split("|");
  let index = 0;
  let commands = input[index];
  index++;

  while (commands !== "Yohoho!") {
    let currCommand = commands.split(" ");

    switch (currCommand.shift()) {
      case "Loot":
        for (let el of currCommand) {
          if (!insideTheChest.includes(el)) {
            insideTheChest.unshift(el);
          }
        }
        break;
      case "Drop":
        let indexOfDroppedItem = currCommand.join();
        if (insideTheChest[indexOfDroppedItem] !== undefined) {
          let droppedItem = insideTheChest.splice(indexOfDroppedItem, 1);
          insideTheChest.push(droppedItem.join(""));
        }
        break;
      case "Steal":
        let stolenItems = insideTheChest.splice(-currCommand, currCommand);
        console.log(stolenItems.join(", "));
        break;
    }

    commands = input[index];
    index++;
  }

  if (insideTheChest.length > 0) {
    let averageTreasureGain = 0;

    for (let el of insideTheChest) {
      let valueLength = el.length;
      averageTreasureGain += valueLength;
    }

    let countOfAllItemsInChest = insideTheChest.length;
    averageTreasureGain /= countOfAllItemsInChest;
    console.log(
      `Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`
    );
  } else {
    console.log("Failed treasure hunt.");
  }
}

// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
// "Loot Wood Gold Coins",
// "Loot Silver Pistol",
// "Drop 3",
// "Steal 3",
// "Yohoho!"])
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
