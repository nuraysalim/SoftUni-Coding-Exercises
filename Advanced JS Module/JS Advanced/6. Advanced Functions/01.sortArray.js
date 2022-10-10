function sortArray(numArray, string) {
    if(string === 'asc') {
       return ascending(numArray);
    } else {
       return descending(numArray);
    };

    function ascending(arr) {
       return arr.sort((a, b) => a - b);
    }

    function descending(arr) {
        return arr.sort((a, b) => b - a);
    }
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));