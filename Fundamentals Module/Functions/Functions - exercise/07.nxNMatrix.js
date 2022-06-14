function nxNMatrix(nNumber) {
    let matrix = "";

    for(let i =0; i < nNumber; i++) {

        for(let j = 0; j < nNumber; j++) {
            matrix += `${nNumber} `;
        }
        matrix += `${''}\n`;
    }
    console.log(matrix);
}
nxNMatrix(7)