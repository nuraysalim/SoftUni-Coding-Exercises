function oddAndEvenSum(integer) {
    let intToString = integer.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let char of intToString) {
        let currDigit = Number(char);

        if(currDigit % 2 === 0) {
            evenSum += currDigit;
        } else {
            oddSum += currDigit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)
