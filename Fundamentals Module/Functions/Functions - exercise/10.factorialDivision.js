function factorialDivision(num1, num2) {
    let factorialOfNum1 = 1;
    let factorialOfNum2 = 1;

    function denotioningOfNum1(digit1, digit2) {
        factorialOfNum1 *= digit1;
        if (digit2 >= 1) {
            factorialOfNum2 *= digit2;
            digit2 =- 1;
        }

        if(digit1 > 1) { 
            denotioningOfNum1(digit1 - 1);
        } 

        let dividingTheTwoAfterFacDiv = factorialOfNum1 / factorialOfNum2;
      return  console.log(dividingTheTwoAfterFacDiv.toFixed(2));
    }
    

    denotioningOfNum1(num1, num2);
}

factorialDivision(5, 2)