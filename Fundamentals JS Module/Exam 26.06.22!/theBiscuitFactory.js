function theBiscuitFactory(input) {
  let strToNum = input.map(Number);
  let bisPerWorker = strToNum[0];
  let workers = strToNum[1];
  let bisOfRival = strToNum[2];

  let allBisADay = bisPerWorker * workers;
  let bisPerMonth = 0;

  for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
      bisPerMonth += Math.floor(allBisADay * 0.75);
    } else {
      bisPerMonth += Math.floor(allBisADay);
    }
  }

  console.log(`You have produced ${bisPerMonth} biscuits for the past month.`);

  let diff;
  let diffInPer;

  if (bisPerMonth > bisOfRival) {
    diff = bisPerMonth - bisOfRival;
    diffInPer = (diff / bisOfRival) * 100;

    console.log(`You produce ${diffInPer.toFixed(2)} percent more biscuits.`);
  } else {
    diff = bisOfRival - bisPerMonth;
    diffInPer = (diff / bisOfRival) * 100;

    console.log(`You produce ${diffInPer.toFixed(2)} percent less biscuits.`);
  }
}
//theBiscuitFactory(["78", "8", "16000"]);
theBiscuitFactory(["65", "12", "26000"]);
