function specialNumbers(input) {
let num = Number(input[0]);
let printLine = ""
let testNum = ""
let isSpecialNum = true
for (let i = 1111; i <= 9999; i++) {
    let curNum = "" + i;
    for(let j = 0; j <= 3; j++) {
        let digit = curNum.charAt(j);
        if(num % digit === 0) {
            testNum += digit;
        } else {
            isSpecialNum = false;
            testNum = "";
            break;
        }
    }
    if(isSpecialNum) {
        printLine += testNum + " ";
    }
    isSpecialNum = true;
    testNum = ""
}
console.log(printLine);

}
specialNumbers(["16"]);