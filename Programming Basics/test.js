function bombNumbers(numSeq, specialBomb) {
  let specialNum = specialBomb[0];
  let bombPower = specialBomb[1];
 
  while (numSeq.includes(specialNum)) {
    let specialNumIndex = numSeq.indexOf(specialNum);
    let arrayL = numSeq.length;
 
    if (specialNumIndex === 0) {
      for (let i = 0; i <= bombPower; i++) {
        numSeq.splice(numSeq.indexOf(numSeq[0]), 1);
      }
    } else if (specialNumIndex - bombPower <= 0 && specialNumIndex !== 0) {
      for (let i = 0; i < specialNumIndex; i++) {
        numSeq.splice(numSeq.indexOf(numSeq[0]), 1);
      }
      for (let i = 0; i <= bombPower; i++) {
        numSeq.splice(numSeq.indexOf(numSeq[0]), 1);
      }
    } else if (specialNumIndex === arrayL - 1) {
      for (let i = bombPower; i >= 0; i--) {
        numSeq.splice(numSeq.indexOf(numSeq[numSeq.length - 1]), 1);
      }
    } else {
      numSeq.splice(specialNumIndex - bombPower, bombPower + bombPower + 1);
    }
  }
 
  let sum = 0;
  for (let el of numSeq) {
    sum += el;
  }
  console.log(sum);
}
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
