function aggElems(arr) {
    let sum = 0;
    let inverseSum = 0;
    let joined = arr.join('');

    for (const num of arr) {
        sum += num;
        inverseSum += 1/num;
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(joined);
}
aggElems([2, 4, 8, 16])