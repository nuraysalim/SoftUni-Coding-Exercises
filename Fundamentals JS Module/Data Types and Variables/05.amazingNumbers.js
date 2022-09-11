function amazingNumbers(num) {
    let numToString = "" + num;
    let sum = 0;

    for (i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i]); 
    }
    
    let sumToString = sum + '';

    console.log(sumToString.includes('9') ? `${num} Amazing? True` : `${num} Amazing? False`)

}
amazingNumbers(1233)