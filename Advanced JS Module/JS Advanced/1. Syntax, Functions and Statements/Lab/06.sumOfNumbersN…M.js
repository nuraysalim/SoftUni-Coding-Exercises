function sumOfNums(n, m) {
    let sum = 0;

    for(let i = Number(n); i <= m; i++) {
        sum += i;
    }

    console.log(sum);
}
sumOfNums('-8', '20')