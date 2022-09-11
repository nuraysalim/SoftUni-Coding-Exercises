function averageNumber(input) {
let numOfNums = Number(input[0]);
let index = 1;
let numCounter = 0;
let sum = 0;

for (let i = 1; i <= numOfNums; i++) {
    let num = Number(input[index]);
    index++;
    numCounter++;
    sum += num
}
let avg = sum / numCounter;
console.log(avg.toFixed(2));
}
averageNumber(["4", "3", "2", "4", "2"])