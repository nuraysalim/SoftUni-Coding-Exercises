function mountainRum(input) {
  const record = Number(input[0]); //seconds
  const distance = Number(input[1]); //meters
  const timeForOneM = Number(input[2]); //seconds;

  let perfectConditions = distance * timeForOneM;
  let delay = Math.floor(distance / 50) * 30;
  const georgeTime = perfectConditions + delay;
  const diff = georgeTime - record;

  if (georgeTime < record) {
    console.log(`Yes! The new record is ${georgeTime.toFixed(2)} seconds.`);
  } else {
    console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
  }
}
mountainRum(["10164", "1400", "25"]);
mountainRum(["5554.36", "1340", "3.23"]);
mountainRum(["1377", "389", "3"]);
