function biggestElement(matrix) {
    let allValues = [];

    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        for (const value of arr) {
            allValues.push(value);
        }
    }

    console.log(Math.max(...allValues));
}
biggestElement([[20, 50, 10],
    [8, 33, 145]])