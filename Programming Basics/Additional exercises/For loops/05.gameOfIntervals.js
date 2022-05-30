function gameOfIntervals(input) {
    let index = 0;
    const numOfGameMoves = Number(input[index]);
    index++;

    let res = 0; 
    let numsFrom0To9 = 0;
    let numsFrom10To19 = 0;
    let numsFrom20To29 = 0; 
    let numsFrom30To39 = 0;
    let numsFrom40To50 = 0;
    let invalidNums = 0;
    
    for(let i = 1; i <= numOfGameMoves; i++) {
        let num = Number(input[index]);
        index++;
        
        if (num >= 0 && num <= 9) {
            numsFrom0To9++;
            res += num * 0.2;
        } else if (num >= 10 && num <= 19) {
            numsFrom10To19++;
            res += num * 0.3;
        } else if (num >= 20 && num <= 29) {
            numsFrom20To29++;
            res += num * 0.4;
        } else if (num >= 30 && num <= 39) {
            numsFrom30To39++;
            res += 50;
        } else if (num >= 40 && num <= 50) {
            numsFrom40To50++;
            res += 100;
        } else {
            invalidNums++;
            res /= 2;
        }
    }

    let perOfNums09 = numsFrom0To9 / numOfGameMoves * 100;
    let perOfNums1019 = numsFrom10To19 / numOfGameMoves * 100;
    let perOfNums2029 = numsFrom20To29 / numOfGameMoves * 100;
    let perOfNums3039 = numsFrom30To39 / numOfGameMoves * 100;
    let perOfNums4050 = numsFrom40To50 / numOfGameMoves * 100;
    let perOfInvalidNums = invalidNums / numOfGameMoves * 100;


    console.log(res.toFixed(2));
    console.log(`From 0 to 9: ${perOfNums09.toFixed(2)}%`);
    console.log(`From 10 to 19: ${perOfNums1019.toFixed(2)}%`);
    console.log(`From 20 to 29: ${perOfNums2029.toFixed(2)}%`);
    console.log(`From 30 to 39: ${perOfNums3039.toFixed(2)}%`);
    console.log(`From 40 to 50: ${perOfNums4050.toFixed(2)}%`);
    console.log(`Invalid numbers: ${perOfInvalidNums.toFixed(2)}%`);

}

gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])