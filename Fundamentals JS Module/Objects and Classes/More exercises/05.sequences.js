function sequences(input) {
  let uniqueArrays = new Set();

  for (const line of input) {
    let arrayOfNums = JSON.parse(line);
    let sortedAscending = JSON.stringify(arrayOfNums.sort((a, b) => b - a));

    uniqueArrays.add(sortedAscending);
  }

  let buff = [];

  for (const strOfArr of uniqueArrays) {
    let format = JSON.parse(strOfArr);
    buff.push(format);
  }

  let sortedByLength = buff.sort((a, b) => {
    return a.length - b.length;
  });

  for (const sequence of sortedByLength) {
    console.log(`[${sequence.join(', ')}]`);
  }
}
sequences([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);
