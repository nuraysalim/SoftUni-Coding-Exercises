function sumOfOddNums(n) {
    let a = 1;
    let sum = 0;
        for (i = 1; i <= n; i++) {
            sum += a;
            console.log(a);
            a +=2;
        }

        console.log(`Sum: ${sum}`)

}
sumOfOddNums(3)