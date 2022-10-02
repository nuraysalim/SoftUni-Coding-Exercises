function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;

    let substraction = Number(firstNum) - Number(secondNum);

    document.getElementById('result').textContent = substraction;
}