function bombNumbers(sequenceOfNums, bombNumAndPower) {
  let copyOfSequenceOfNums = sequenceOfNums.slice();
  let bombNum = bombNumAndPower[0];
  let power = bombNumAndPower[1];
  let boolean = copyOfSequenceOfNums.includes(bombNum);
  let sumOfRemainingEl = 0;

  while (boolean) {
    if (copyOfSequenceOfNums.indexOf(bombNum) <= power) {
      copyOfSequenceOfNums.splice(0, copyOfSequenceOfNums.indexOf(bombNum));
      copyOfSequenceOfNums.splice(
        copyOfSequenceOfNums.indexOf(bombNum),
        power + 1
      );
    } else {
      copyOfSequenceOfNums.splice(
        copyOfSequenceOfNums.indexOf(bombNum) - power,
        power
      );
      copyOfSequenceOfNums.splice(
        copyOfSequenceOfNums.indexOf(bombNum),
        power + 1
      );
    }

    boolean = copyOfSequenceOfNums.includes(bombNum);
  }

  for (let el of copyOfSequenceOfNums) {
    sumOfRemainingEl += el;
  }
  console.log(sumOfRemainingEl);
}
bombNumbers([4, 9, 0, 6, 6, 2, 3], [9, 2]);
