function smallestTwoNumbers(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let res = sortedArr.slice(0, 2);
    console.log(res.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5])