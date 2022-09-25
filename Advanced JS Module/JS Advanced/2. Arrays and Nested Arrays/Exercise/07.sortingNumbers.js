function sortingNums(arr) {
    let ascending = arr.slice().sort((a,b) => a-b);
    let res = [];

    while (ascending.length) {
        let smallestValue = ascending.shift();
        let biggestValue = ascending.pop();

        if(smallestValue !== undefined) {
            res.push(smallestValue);
        }

        if (biggestValue !== undefined) {
            res.push(biggestValue);
        }
    }

    return res;
}
console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));