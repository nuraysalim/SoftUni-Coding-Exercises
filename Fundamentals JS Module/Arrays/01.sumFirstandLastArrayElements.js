function sumFirstandLastArrayElements(numbers) {
    let firstNum = numbers[0];
    let lastNum = numbers[numbers.length-1];
    let res = firstNum + lastNum;

    console.log(res)
}
sumFirstandLastArrayElements([20, 0, 40])