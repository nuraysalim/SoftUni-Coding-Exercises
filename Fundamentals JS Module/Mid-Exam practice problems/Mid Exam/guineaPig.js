function guineaPig(input) {
  let gramsFood = input[0] * 1000;
  let gramsHay = input[1] * 1000;
  let gramsCover = input[2] * 1000;
  let weightOfGuinea = input[3] * 1000;
  let isNotEnough = false;

  for (let day = 1; day <= 30; day++) {
    gramsFood -= 300;

    if (day % 2 === 0) {
      let amountOfHay = gramsFood * 0.05;
      gramsHay -= amountOfHay;
    }

    if (day % 3 === 0) {
      let quantityOfCover = weightOfGuinea / 3;
      gramsCover -= quantityOfCover;
    }

    if (gramsFood <= 0 || gramsHay <= 0 || gramsCover <= 0) {
      isNotEnough = true;
      console.log("Merry must go to the pet store!");
      break;
    }
  }

  if (!isNotEnough) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(gramsFood / 1000).toFixed(
        2
      )}, Hay: ${(gramsHay / 1000).toFixed(2)}, Cover: ${(
        gramsCover / 1000
      ).toFixed(2)}.`
    );
  }
}
guineaPig(["9", "5", "5.2", "1"]);
