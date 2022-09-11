function sleepyTomCat(input) {
    const restDays = Number(input[0]);
    const normForPlay = 30000;
    const minsForNormalDayPlay = 63;
    const minsForRestDayPlay = 127

    const workDays = 365 - restDays;
    const timeForPlay = (workDays * minsForNormalDayPlay) + (restDays * minsForRestDayPlay);
    const differenceOfTheNorm = Math.abs(normForPlay - timeForPlay);
    const hoursOfPlay = Math.trunc(differenceOfTheNorm / 60);
    const minsOfPlay = differenceOfTheNorm % 60;

    if (timeForPlay > normForPlay) {
        console.log("Tom will run away");
        console.log(`${hoursOfPlay} hours and ${minsOfPlay} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${hoursOfPlay} hours and ${minsOfPlay} minutes less for play`);
    }
}
sleepyTomCat(["113"])