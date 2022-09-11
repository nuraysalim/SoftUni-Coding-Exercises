function simpleCalculator(x, y, operator) {
    let res;

    switch (operator) {
        case 'multiply': res = (x, y) => x * y;
            break;
        case 'divide': res = (x, y) => x / y;
            break;
        case 'add': res = (x, y) => x + y;
            break;
        case 'subtract': res = (x, y) => x - y;
            break;
    }
    console.log(res(x, y));
}
simpleCalculator(2, 2, 'divide')
simpleCalculator(5, 5, 'multiply')
simpleCalculator(50, 13, 'subtract')
 simpleCalculator(12, 19, 'add')