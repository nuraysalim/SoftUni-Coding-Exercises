function oddOccurrences(input) {
  let arrayOfWords = input.split(" ");

  let res = [];

  for (let i = 0; i < arrayOfWords.length; i++) {
    let currTargetWord = arrayOfWords[i].toLowerCase();
    let occuranceCounter = 0;

    if (res.includes(currTargetWord)) {
      continue;
    }

    for (let word of arrayOfWords) {
      if (word.toLowerCase() === currTargetWord) {
        occuranceCounter++;
      }
    }

    if (occuranceCounter % 2 === 1 || occuranceCounter === 1) {
      res.push(currTargetWord);
    }
  }
  console.log(res.join(" "));
}
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food food food food food");
