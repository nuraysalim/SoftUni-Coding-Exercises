function sumEvenNumbers(array) {
    let res = 0;
    for (let el of array) {
        if (el % 2 == 0) {
            res += Number(el);
        }
    }

    console.log(res)
}
sumEvenNumbers(['1','2','3','4','5','6'])
sumEvenNumbers(['3','5','7','9'])