function sumDigits(num) {   
    let numToString = num.toString();
    let res = 0;

    for (let i = 0; i < numToString.length; i++) {
        res += Number(numToString[i]);
    }

    console.log(res)
    
}
sumDigits(245678)
sumDigits(97561)
sumDigits(543)