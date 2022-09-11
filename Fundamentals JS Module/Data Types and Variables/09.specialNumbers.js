function specialNums(n) {
    let isSpecial = "";
    let res = 0;
    for (let i = 1; i <= n; i++) {
        let numToStr = i + "";
        for (let a = 0; a < numToStr.length; a++) {
            res += Number(numToStr[a]);
        }
    if (res === 5 || res === 7 || res === 11) {
        isSpecial = "True";
    } else {
        isSpecial = "False";
    }
        console.log(`${i} -> ${isSpecial}`);
        res = 0;
    }
}
specialNums(20)