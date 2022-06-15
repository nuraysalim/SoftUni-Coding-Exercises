function nxNMatrix(nNumber) {
    let matrix = [];

    for(let i =0; i < nNumber; i++) {
        let row = [];

        for(let j = 0; j < nNumber; j++) {
           row.push(nNumber);
        }
        matrix.push(row.join(' '));
    }
     console.log(matrix.join('\n'));
}
nxNMatrix(7)