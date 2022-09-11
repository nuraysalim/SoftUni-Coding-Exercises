function barcodeGenerator(input) {
let startingNum = "" + input[0];
let endingNum = "" + input[1];

let printLine = "";

let numberA = Number(startingNum[0]);
let numberB = Number(startingNum[1]);
let numberC = Number(startingNum[2]);
let numberD = Number(startingNum[3]);

let numbera = Number(endingNum[0]);
let numberb = Number(endingNum[1]);
let numberc = Number(endingNum[2]);
let numberd = Number(endingNum[3]);

let res = "";

for(let a = numberA; a <= numbera; a++) {
    for(let b = numberB; b <= numberb; b++) {
        for(let c = numberC; c <= numberc; c++) {
            for(let d = numberD; d <= numberd; d++) {
                if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                    res += `${a}${b}${c}${d} `;
                    
                }
            }
        }
    }
}
console.log(res)
}
barcodeGenerator(["2345", "6789"])