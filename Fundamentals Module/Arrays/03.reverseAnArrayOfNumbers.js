function reserve(n, array) {
    let reversedArr = [];
    for(let i = n - 1; i >= 0; i--) {
        reversedArr.push(array[i]);
    }
    console.log(reversedArr.join(' '));
}
reserve(3, [10, 20, 30, 40, 50])
reserve(4, [-1, 20, 99, 5])