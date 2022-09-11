function stringSubstring(targetWord, sentence) {
  let sentenceToLower = sentence.toLowerCase().split(" ");

  for (let word of sentenceToLower) {
    if (word === targetWord.toLowerCase()) {
      console.log(targetWord);
        return;
    }
  }

    console.log(`${targetWord} not found!`);
  }
stringSubstring("Javascript", "JavaScript is the best programming language");
console.log("----------------");
stringSubstring("python", "JavaScript is the best programming language");
