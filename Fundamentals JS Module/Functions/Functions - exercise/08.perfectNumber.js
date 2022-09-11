function perfectNumber(number) {
    let sumOfProperFactors = 0;
    let isPerfectNum = false;

    for(let i = 1; i < number; i++) {
        if (number % i === 0 && number !== i) {
            sumOfProperFactors += i;
        }

        if (sumOfProperFactors === number) {
            console.log("We have a perfect number!");
            isPerfectNum = true;
            break;
        }
    }

    if(!isPerfectNum) {
       console.log("It's not so perfect.")
    }
}
perfectNumber(1935871)