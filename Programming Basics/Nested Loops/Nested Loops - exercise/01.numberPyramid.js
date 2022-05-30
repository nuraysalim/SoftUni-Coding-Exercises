function numberPyramid(input) {
let num = Number(input[0]);
let numCounter = 0;
let printLine = "";
let isFound = false;

for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= row; col++) {
        numCounter++;
        printLine += numCounter + " ";
        if (numCounter == num) {
            isFound = true;
            break;
        }
    }
    console.log(printLine)
    printLine = "";
    if(isFound) {
        break;
    }
}
}
numberPyramid(["15"])