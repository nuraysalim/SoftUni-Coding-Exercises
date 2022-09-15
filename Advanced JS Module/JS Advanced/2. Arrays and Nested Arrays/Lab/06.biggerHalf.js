function biggerHalf(arr) {
    let sort = arr.sort((a, b) => a - b);
    let half = Math.ceil(sort.length / 2);
    let secondHalf = sort.slice(-half);
   return secondHalf
}
console.log(biggerHalf([4, 7, 2, 5]))
console.log('------------');
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))