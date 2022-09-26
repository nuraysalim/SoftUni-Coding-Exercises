function magicMatrices(matrix) {
    /*
    //This is my initial solution and I got 83/100 because of a error during the execution

    isMagical = true;
    let columns = (matrix[0]).length;
    let columnSum;
    let index;

    for (const arr of matrix) {
        if(arr.length === 0) {
            return;
        }
    }
    
    let firstRowSum = (matrix[0]).reduce((previousV, currV) => previousV + currV);

    for(let j = 0; j < matrix.length; j++) {
        let nextRowSum = (matrix[j]).reduce((previousV, currV) => previousV + currV);

        if(nextRowSum !== firstRowSum) {
            isMagical = false;
            return isMagical;
        }

        index = 0;
        columnSum = 0;

        for (let k = 0; k < (matrix[0]).length; k++) {
            columnSum += matrix[index][columns - 1];  
            index++;
        }

        columns--;
        
        if(columnSum !== firstRowSum) {
            isMagical = false;
            return isMagical;
        }
    }

    return isMagical;
    */

    //A more optimazed way of solving this problem:

    for(let i = 0; i < matrix.length - 1; i++) {
        let sumFirstRow = matrix[i].reduce((acc, el) => acc + el);
        let sumOfSecondRow = matrix[i + 1].reduce((acc, el) => acc + el);
        let sumOfFirstCol = 0;
        let sumOfSecondCol = 0;

        for(let col = 0; col < matrix.length; col++) {
            sumOfFirstCol += matrix[i][col];
            sumOfSecondCol += matrix[i + 1][col];
        }

        if(sumFirstRow !== sumOfSecondRow || sumOfFirstCol !== sumOfSecondCol) {
            return false;
        }
    }

    return true;
}
console.log(magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]))