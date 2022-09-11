function memoryGame(input) {
  index = 0;
  let arrOfSequenceOfEl = input.shift().split(" ");
  let command = input[index];
  let moves = 0;

  while (command !== "end") {
    command = input[index].split(" ");

    let firstIndex = command[0];
    let secondIndex = command[1];
    let indexesOfArr = arrOfSequenceOfEl.length - 1;
    let firstValueFromSeq = arrOfSequenceOfEl[firstIndex];
    let secondValueFromSeq = arrOfSequenceOfEl[secondIndex];
    moves++;
    if (
      firstValueFromSeq == undefined ||
      secondValueFromSeq == undefined ||
      firstIndex == secondIndex
    ) {
      console.log("Invalid input! Adding additional elements to the board");
      let middleIndex = Math.ceil(indexesOfArr / 2);
      let addedEl = `-${moves}a`;
      arrOfSequenceOfEl.splice(middleIndex, 0, addedEl, addedEl);
    } else if (firstValueFromSeq == secondValueFromSeq) {
      console.log(
        `Congrats! You have found matching elements - ${firstValueFromSeq}!`
      );
      arrOfSequenceOfEl.splice(firstIndex, 1);

      if (secondIndex == 0) {
        arrOfSequenceOfEl.splice(secondIndex, 1);
      } else {
        arrOfSequenceOfEl.splice(secondIndex - 1, 1);
      }
    } else {
      console.log("Try again!");
    }
    index++;
    command = input[index];
    if (arrOfSequenceOfEl.length == 0) {
      console.log(`You have won in ${moves} turns!`);
      break;
    }
  }

  if (arrOfSequenceOfEl.length > 0) {
    console.log(`Sorry you lose :(
${arrOfSequenceOfEl.join(" ")}`);
  }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
