function schoolLibrary(input) {
  let shelf = input.shift().split("&");
  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Done") {
    let currCom = command.split(" | ");

    switch (currCom.shift()) {
      case "Add Book":
        if (!shelf.includes(currCom.join())) {
          shelf.unshift(currCom.join());
        }
        break;
      case "Take Book":
        if (shelf.includes(currCom.join())) {
          let indexOfBook = shelf.indexOf(currCom.join());
          shelf.splice(indexOfBook, 1);
        }
        break;
      case "Swap Books":
        let book1 = shelf.includes(currCom[0]);
        let book2 = shelf.includes(currCom[1]);

        if (book1 && book2) {
          let indexOfBook1 = shelf.indexOf(currCom[0]);
          let indexOfBook2 = shelf.indexOf(currCom[1]);
          let tempRemovedBook1 = shelf.splice(indexOfBook1, 1).join();
          shelf.splice(indexOfBook2, 0, tempRemovedBook1);
          indexOfBook2 = shelf.indexOf(currCom[1]);
          let tempRemovedBook2 = shelf.splice(indexOfBook2, 1).join();
          shelf.splice(indexOfBook1, 0, tempRemovedBook2);
        }
        break;
      case "Insert Book":
        if (!shelf.includes(currCom.join())) {
          shelf.push(currCom.join());
        }
        break;
      case "Check Book":
        if (shelf[Number(currCom)] != undefined) {
          let slicedBook = shelf.slice(currCom, Number(currCom) + 1);
          console.log(slicedBook.join());
        }
        break;
    }

    command = input[index];
    index++;
  }

  console.log(shelf.join(", "));
}
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger&ME&BossLady",
"Swap Books | Heart of Darkness | Heart of Darkness",
"Swap Books | ME | Heart of Darkness",
"Check Book | 5",
"Done"])

