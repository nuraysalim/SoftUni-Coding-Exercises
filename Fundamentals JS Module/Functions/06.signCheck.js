function signCheck(numOne, numTwo, numThree) {
  let minusCounter = 0;

  if (numOne < 0) {
    minusCounter++;
  }

  if (numTwo < 0) {
    minusCounter++;
  }
  if (numThree < 0) {
    minusCounter++;
  }

  if (minusCounter % 2 === 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
