function solve(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log(num1);
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2);
    } else if (num3 >= num1 && num3 >= num2) {
        console.log(num3);
    }

    if(num1 <= num2 && num1 >= num3 || num1 >= num2 && num1 <= num3) {
        console.log(num1)
    } else if (num2 <= num1 && num2 >= num3 || num2 >= num1 && num2 <= num3) {
        console.log(num2);
    } else if (num3 <= num1 && num3 >= num2 || num3 >= num1 && num3 <= num2) {
        console.log(num3);
    }

    if (num1 <= num2 && num1 <= num3) {
        console.log(num1);
    } else if (num2 <= num1 && num2 <= num3) {
        console.log(num2);
    } else if (num3 <= num1 && num3 <= num2) {
        console.log(num3);
    }

    //Second way of solving the problem: 
    
//     const maxNum = Math.max(num1, num2, num3);
//     const minNum = Math.min(num1, num2, num3);
//     let midNumber = 0;

//     if (maxNum === num1) {
//         midNumber = Math.max(num2, num3);
//     } else if (maxNum === num2) {
//         midNumber = Math.max(num1, num3); 
//     } else if (maxNum === num3) {
//         midNumber = Math.max(num1, num2);
//     }

//  console.log(`${maxNum}, ${midNumber}, ${minNum}`);
    
}
solve(3, 8, 100 )