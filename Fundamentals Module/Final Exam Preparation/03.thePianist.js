function thePianist(input) {
  let pieces = {};
  let numOfPieces = Number(input.shift());

  for (let index = 0; index < numOfPieces; index++) {
    let [piece, composer, key] = input[index].split("|");

    pieces[piece] = { [composer]: key };
  }

  let line = input[numOfPieces];
  numOfPieces++;

  while (line !== "Stop") {
    let command = line.split("|").shift();

    switch (command) {
      case "Add":
        let [pieceToCheck, composer, key] = line
          .replace(`${command}|`, "")
          .split("|");
        if (pieces.hasOwnProperty(pieceToCheck)) {
          console.log(`${pieceToCheck} is already in the collection!`);
        } else {
          pieces[pieceToCheck] = { [composer]: key };
          console.log(
            `${pieceToCheck} by ${composer} in ${key} added to the collection!`
          );
        }
        break;
      case "Remove":
        let pieceToRemove = line.replace(`${command}|`, "");

        if (pieces.hasOwnProperty(pieceToRemove)) {
          delete pieces[pieceToRemove];
          console.log(`Successfully removed ${pieceToRemove}!`);
        } else {
          console.log(
            `Invalid operation! ${pieceToRemove} does not exist in the collection.`
          );
        }
        break;
      case "ChangeKey":
        let [pieceToChange, newKey] = line
          .replace(`${command}|`, "")
          .split("|");
        if (pieces.hasOwnProperty(pieceToChange)) {
          let key = Object.keys(pieces[pieceToChange]);
          pieces[pieceToChange][key] = newKey;
          console.log(`Changed the key of ${pieceToChange} to ${newKey}!`);
        } else {
          console.log(
            `Invalid operation! ${pieceToChange} does not exist in the collection.`
          );
        }
        break;
    }

    line = input[numOfPieces];
    numOfPieces++;
  }

  for (const [pieceName, obj] of Object.entries(pieces)) {

    for (const composer in obj) {
      let key = obj[composer];
      console.log(`${pieceName} -> Composer: ${composer}, Key: ${key}`);
      break;
    }

    continue;
  }
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
