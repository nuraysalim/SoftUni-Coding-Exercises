function calculator(num, operator, num2) {
  let res = 0;

  switch (operator) {
    case "+":
      res = num + num2;
      break;
    case "-":
      res = num - num2;
      break;
    case "*":
      res = num * num2;
      break;
    case "/":
      res = num / num2;
      break;
  }

  console.log(res.toFixed(2));
}
calculator(5, "+", 5);
calculator(25.5, "-", 3);
