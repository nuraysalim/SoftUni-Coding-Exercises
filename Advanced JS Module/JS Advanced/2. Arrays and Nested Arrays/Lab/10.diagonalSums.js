function diagonalSums(matrix) {
    let maxIndexes = (matrix[0]).length - 1;
    let sumOfFirstDiagonal = 0;
    let sumOfSecondDiagonal = 0;

    for(let i = 0; i < matrix.length; i++) {
        sumOfFirstDiagonal += matrix[i][i];
        sumOfSecondDiagonal += matrix[i][maxIndexes];

        maxIndexes--;
    }

    console.log(`${sumOfFirstDiagonal} ${sumOfSecondDiagonal}`);
}
diagonalSums([[20, 40],
    [10, 60]])