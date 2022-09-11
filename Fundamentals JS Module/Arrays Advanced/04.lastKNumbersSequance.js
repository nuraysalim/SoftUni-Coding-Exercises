function lastKNumbersSequance(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let kEl = arr.slice(-k);
        let sumOfKNum = 0;
        for (let el of kEl) {
            sumOfKNum += el;
        }
        arr.push(sumOfKNum);
}

    console.log(arr.join(' '));
}
lastKNumbersSequance(6, 3)
lastKNumbersSequance(8, 2)
