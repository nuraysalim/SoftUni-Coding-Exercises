function countStringOccurrences(text, targetWord) {
  let textToArr = text.split(" ");
  let targetWordCounter = 0;

  for (const word of textToArr) {
    if (word == targetWord) {
      targetWordCounter++;
    }
  }

  console.log(targetWordCounter);
}
countStringOccurrences(
  "is great place for learning new programming languages",
  "softuni"
);
