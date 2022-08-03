function shoppingList(input) {
  let groceries = input.shift().split("!");
  let index = 0;
  let command = input[index];
  index++;
  let indexOfItem;

  while (command !== "Go Shopping!") {
    let currCommand = command.split(" ");
    command = currCommand.shift();

    switch (command) {
      case "Urgent":
        if (!groceries.includes(currCommand.join())) {
          groceries.unshift(currCommand[0]);
        }
        break;
      case "Unnecessary":
        if (groceries.includes(currCommand.join())) {
          indexOfItem = groceries.indexOf(currCommand[0]);
          groceries.splice(indexOfItem, 1);
        }
        break;
      case "Correct":
        if (groceries.includes(currCommand[0])) {
          indexOfItem = groceries.indexOf(currCommand[0]);
          groceries.splice(indexOfItem, 1, currCommand[1]);
        }
        break;
      case "Rearrange":
        if (groceries.includes(currCommand.join())) {
          indexOfItem = groceries.indexOf(currCommand.join());
          let tempValue = groceries.splice(indexOfItem, 1).join();
          groceries.push(tempValue);
        }
        break;
    }
    command = input[index];
    index++;
  }

  console.log(groceries.join(", "));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Rearrange Milk",
"Rearrange Salt",
"Rearrange Bananaaa",
"Go Shopping!"])
