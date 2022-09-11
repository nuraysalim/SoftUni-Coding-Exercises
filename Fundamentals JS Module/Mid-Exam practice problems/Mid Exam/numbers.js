function numbers(array) {
  let arrayOfNums = array.split(" ").map(Number);

  let averageValueOfNums = 0;

  for (let el of arrayOfNums) {
    averageValueOfNums += el;
  }
  averageValueOfNums /= arrayOfNums.length;

  let arrayOfAboveAverage = [];
  let numCounter = 0;
  for (let el of arrayOfNums) {
    if (el > averageValueOfNums.toFixed(3)) {
      arrayOfAboveAverage.push(el);
      numCounter++;
    }
  }

  if (numCounter === 0) {
    console.log("No");
  } else {
    arrayOfAboveAverage.sort((a, b) => {
      return b - a;
    });

    console.log(arrayOfAboveAverage.slice(0, 5).join(" "));
  }
}
//numbers('10 20 30 40 50')
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
