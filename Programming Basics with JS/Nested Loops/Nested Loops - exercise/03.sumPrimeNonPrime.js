function sumPrimeNonPrime(input) {
    let index = 0;

    let sumOfPrimeNums = 0;
    let sumOfNonPrimeNums = 0;

    while(input[index] !== "stop") {
        let number = Number(input[index]);

        if (number < 0) {
            console.log("Number is negative.")
        } else {
          let isPrime = true;
           for(let i = 2; i < number; i++) {
               if (number % i == 0) {
                   isPrime = false;
                   break;
               }
           }
           if(isPrime) {
            sumOfPrimeNums += number;
           } else {
               sumOfNonPrimeNums += number;
           }
        }
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumOfPrimeNums}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPrimeNums}`);

}
sumPrimeNonPrime(["30", 

"83", 

"33", 

"-1", 

"20", 

"stop"])  