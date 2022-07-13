function wordTracker(arrayInput) {
  let targetWords = arrayInput.shift()
                              .split(" ");
  let wordAndCount = {};

  for (let word of arrayInput) {
    if (targetWords.includes(word)) {
      if (!wordAndCount.hasOwnProperty(word)) {
        wordAndCount[word] = 1;
      } else {
        let oldValue = wordAndCount[word];
        wordAndCount[word] = oldValue + 1;
      }
    }
  }

  let valuesOfWordAndCount = Object.entries(wordAndCount);
  let sortingInDesOrder = valuesOfWordAndCount.sort((a, b) => {
    (valueA = a[1]), (valueB = b[1]);
    return valueB - valueA;
  });

  for (const sortedWord of sortingInDesOrder) {
    console.log(sortedWord[0], "-", sortedWord[1]);
  }
}

//This solution got 40/100 and I can't seem to find what's wrong with the source code
wordTracker([
    'In',  'sentence','sentence', 'this', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'In', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);
