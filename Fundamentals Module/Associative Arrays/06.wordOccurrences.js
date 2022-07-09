function wordOccurrences(input) {
  let res = new Map();

  for (let word of input) {
    if (!res.has(word)) {
      res.set(word, 1);
    } else {
      let wordCount = res.get(word) + 1;
      res.set(word, wordCount);
    }
  }

  let sorted = Array.from(res.entries()).sort((a, b) => b[1] - a[1]);

  for (const kvp of sorted) {
    console.log(`${kvp[0]} -> ${kvp[1]} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
