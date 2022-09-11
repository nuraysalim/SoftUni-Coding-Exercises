function processOddNumbers(arr) {
    let filteredElements = arr.filter((el, i) => i % 2 == 1);
    let doubledElements = filteredElements.map(x => x * 2);
    let reversedElements = doubledElements.reverse()

    console.log(reversedElements.join(' '));
}
processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])