function smallestTwoNums(arr) {
 let res = arr.sort((a, b) => a - b);
 console.log(res[0]);
 console.log(res[1]);
}
smallestTwoNums([30, 15, 50, 5]);
console.log('---------------');
smallestTwoNums([3, 0, 10, 4, 7, 3])