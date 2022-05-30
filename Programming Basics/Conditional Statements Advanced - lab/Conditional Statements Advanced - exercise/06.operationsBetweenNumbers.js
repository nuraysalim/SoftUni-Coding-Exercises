function operationsBetweenNum(input) {
    const n1 = Number(input[0]);
    const n2 = Number(input[1]); 
    const operator = input[2];
    let result = 0
    let num = ""

   switch (operator) {
       case "+": result = n1 + n2; break;
       case "-": result = n1 - n2; break;
       case "*": result = n1 * n2; break;
       case "/": result = n1 / n2; break;
       case "%": result = n1 % n2; break;
       
   }
   if ((operator === "+" || operator === "-" || operator === "*") && result % 2 === 0) {
    num = "even";
    console.log(`${n1} ${operator} ${n2} = ${result} - ${num}`);
   } else if (operator === "+" || operator === "-" || operator === "*") {
    num = "odd";
    console.log(`${n1} ${operator} ${n2} = ${result} - ${num}`);
   } else if (operator === "/" && n2 === 0) {
    console.log(`Cannot divide ${n1} by zero`)
   } else if (operator === "/") {
       console.log(`${n1} / ${n2} = ${result.toFixed(2)}` );
   } else if (operator === "%" && n2 === 0) {
    console.log(`Cannot divide ${n1} by zero`)
   } else if (operator === "%") {
       console.log(`${n1} % ${n2} = ${result}`);
   } 
}

operationsBetweenNum(["10",
"1",
"-"])



