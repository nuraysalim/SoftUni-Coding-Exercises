function onTimeForTheExam(input) {
    const examHour = Number(input[0]);
    const examMin = Number(input[1]);
    const arrivalHour = Number(input[2]);
    const arrivalMin = Number(input[3]);

    const totalExamMin = examHour * 60 + examMin;
    const totalArrivalTime = arrivalHour * 60 + arrivalMin; 
    const differenceInTime = Math.abs(totalExamMin - totalArrivalTime);
    const hourDiff = Math.floor(differenceInTime / 60);
    let minDiff = differenceInTime % 60;
    
    if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)) {
        minDiff = `0${minDiff}`;
    }
    
    if (totalArrivalTime === totalExamMin) {
        console.log("On time");
    } else if (totalArrivalTime > totalExamMin && differenceInTime < 60) {
        console.log(`Late ${minDiff} minutes after the start`)
} else if (totalArrivalTime > totalExamMin && differenceInTime >= 60) {
    console.log(`Late ${hourDiff}:${minDiff} hours after the start`)
} else if (differenceInTime <= 30) {
    console.log(`On time`);
    console.log(`${minDiff} minutes before the start`)
} else if (differenceInTime > 30 && differenceInTime < 60) {
    console.log("Early")
    console.log(`${minDiff} minutes before the start`);
} else {
    console.log("Early");
    console.log(`${hourDiff}:${minDiff} hours before the start`)
}
}
onTimeForTheExam(["16",
"00",
"15",
"00"])

