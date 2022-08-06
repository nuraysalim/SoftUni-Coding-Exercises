function theImitationGame(input) {
  let message = input.shift();

  let commandParser = {
    'Move': (numOfLetters) => {
      let firstHalf = message.slice(0, numOfLetters);
      let secondHalf = message.slice(Number(numOfLetters),);

      return (message = secondHalf + firstHalf);
    },
    'Insert': (index, value) => {
      let firstHalf = message.slice(0, Number(index));
      let secondHalf = message.slice(Number(index),);

      return (message = firstHalf + value + secondHalf);
    },
    'ChangeAll': (givenSubstr, replacement) => {
      return (message = message.replace(
        new RegExp(givenSubstr, "g"),
        replacement
      ));
    },
  };

  for (const line of input) {
    if (line === "Decode") {
      console.log(`The decrypted message is: ${message}`);
    }

    let [command, firstParam, secondParam] = line.split("|");

    if (command === "ChangeAll") {
      commandParser.ChangeAll(firstParam, secondParam);
    } else if (command === "Insert") {
      commandParser.Insert(firstParam, secondParam);
    } else {
      commandParser.Move(firstParam);
    }
  }
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
console.log("------------");
theImitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
