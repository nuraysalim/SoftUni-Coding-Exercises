function factorialDivision(num1, num2) {
    let factorialOfNum1 = 1;
    let factorialOfNum2 = 1;
    let digit1 = num1;
    let digit2 = num2;
    
    while(digit1 > 0) {
        factorialOfNum1 *= digit1;
        digit1 -= 1;
    }

    while(digit2 > 0) {
        factorialOfNum2 *= digit2;
        digit2 -= 1;
    }
        
    let dividingTheTwoAfterFacDiv = factorialOfNum1 / factorialOfNum2;

     console.log(dividingTheTwoAfterFacDiv.toFixed(2));
}
factorialDivision(5, 2)
factorialDivision(6, 2)
