function equaleSumsEvenOddPosition(input) {
 let numOne = input[0];
 let numTwo = input[1];

let printLine = "";

    for(let i = numOne; i <= numTwo; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
            for(let j = 0; j < currentNum.length; j++) {
                 
                 currentDigit = Number(currentNum.charAt(j));
                if(j % 2 === 0) {
                    evenSum += currentDigit;
                } else {
                    oddSum += currentDigit;
                }
            }

            if(oddSum === evenSum) {
               printLine += `${i} `
            }

        
 }
 console.log(printLine)


}
equaleSumsEvenOddPosition(["100000", "100050"])