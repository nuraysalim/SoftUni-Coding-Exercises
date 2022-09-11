function worldSwimmingRecord(input) {
    const recordTime = Number(input[0]);
    const distance = Number(input[1]);
    const swimmingTimeForOneMeter = Number(input[2]);

    const ivansTime = distance * swimmingTimeForOneMeter;
    const timeWithWaterResistence = (Math.floor(distance / 15)) * 12.5;

    const totalTime = ivansTime + timeWithWaterResistence;

    if (totalTime < recordTime) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordTime).toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"])


