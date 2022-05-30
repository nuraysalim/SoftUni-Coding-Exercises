function num(num1, num2, num3){
    let sumOfNums = num1 + num2 + num3;

   sumOfNums % 1 === 0 ? sumOfNums += ' - Integer' : sumOfNums += ' - Float'; 
    console.log(sumOfNums);
}
num(9, 100, 1.1)
num(100, 200, 303)