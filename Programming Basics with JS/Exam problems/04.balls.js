function balls(input) {
  const n = Number(input[0]);
  let index = 1;
  let color = input[index];
  index++;

  let totalPoints = 0;
  let redBallsCounter = 0;
  let orangeBallsCounter = 0;
  let yellowBallsCounter = 0;
  let whiteBallsCounter = 0;
  let otherColorBallsCounter = 0;
  let blackBallsCounter = 0;

  for (let i = 1; i <= n; i++) {
    otherColorBallsCounter++;

    switch (color) {
      case "red":
        redBallsCounter++;
        otherColorBallsCounter--;
        totalPoints += 5;
        break;
      case "orange":
        orangeBallsCounter++;
        otherColorBallsCounter--;
        totalPoints += 10;
        break;
      case "yellow":
        yellowBallsCounter++;
        otherColorBallsCounter--;
        totalPoints += 15;
        break;
      case "white":
        whiteBallsCounter++;
        otherColorBallsCounter--;
        totalPoints += 20;
        break;
      case "black":
        blackBallsCounter++;
        otherColorBallsCounter--;
        totalPoints = Math.floor(totalPoints / 2);
        break;
    }
    color = input[index];
    index++;
  }

  console.log(`Total points: ${totalPoints}`);
  console.log(`Red balls: ${redBallsCounter}`);
  console.log(`Orange balls: ${orangeBallsCounter}`);
  console.log(`Yellow balls: ${yellowBallsCounter}`);
  console.log(`White balls: ${whiteBallsCounter}`);
  console.log(`Other colors picked: ${otherColorBallsCounter}`);
  console.log(`Divides from black balls: ${blackBallsCounter}`);
}
balls(["3", "white", "black", "pink"]);
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);
