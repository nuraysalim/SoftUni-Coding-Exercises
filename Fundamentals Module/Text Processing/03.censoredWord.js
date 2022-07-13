function censoredWord(sentence, targetWord) {
  let censored = sentence.replace(targetWord, "*".repeat(targetWord.length));
  while (censored.includes(targetWord)) {
    censored = censored.replace(targetWord, "*".repeat(targetWord.length));
  }
  console.log(censored);
}
censoredWord("Find hidden the word hiddennn", "hidden");
