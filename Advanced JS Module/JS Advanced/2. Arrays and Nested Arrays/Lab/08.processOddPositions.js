function processOddPositions(arr) {
    let res = arr
    .filter((n, i) => i % 2 !== 0)
    .map(n => n * 2)
    .reverse();

    return res;
}
console.log(processOddPositions([3, 0, 10, 4, 7, 3]))