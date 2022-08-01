function sequences(input) {
  let uniqueArrays = new Set();

  for (const line of input) {
    let arrayOfNums = JSON.parse(line);
    let sortedAscending = arrayOfNums.sort((a, b) => b - a).toString();

    uniqueArrays.add(sortedAscending);
  }

  let sortedByLength = Array.from(uniqueArrays).sort((a, b) => {
    return a.length - b.length;
  });

  for (const strOfArr of sortedByLength) {
    let format = strOfArr.split(",");
    let buff = [];
    
    for (const num of format) {
      buff.push(Number(num));
    }
    console.log(buff);
  }
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]);
