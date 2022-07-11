function wordTracker(arrayInput) {
  let result = new Map();

  let words = arrayInput.shift().split(' ');
  for(let word of words) {
    result.set(word, 0);
  }

  for(let word of arrayInput) {
    if(result.has(word)) {
      let oldValue = result.get(word);
      result.set(word, oldValue + 1);
    }
  }

  let sortRes = Array.from(result).sort((a, b) => b[1] - a[1]);

  for(let [key, value] of sortRes) {
    console.log(key, '-', value);
  }
}
wordTracker( [
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]
);
