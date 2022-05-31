function binaryToDecimal(number) {
    let decimalNum = 0;
    let index = Number(number.length - 1);

    for (let i = 0; i < number.length; i++) {
     decimalNum += Number(number[i]) * Math.pow(2,index);
     index--;
    }

    console.log(decimalNum);
}
binaryToDecimal('00001001')
binaryToDecimal('11110000')