function mathOperations(num1, num2, operator) {
    let res;

    switch(operator) {
        case '+': res = num1 + num2;
            break;
        case '-': res = num1 - num2;
            break;
        case '*': res = num1 * num2
            break;
        case '/': res = num1 / num2;
            break;
        case '%': res = num1 % num2;
            break;
        case '**': res = num1**num2;
            break;
    }

    console.log(res);
}
mathOperations(3, 5.5, '**')