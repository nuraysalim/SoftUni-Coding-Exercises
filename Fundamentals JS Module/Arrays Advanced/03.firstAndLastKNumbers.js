function firstAndLastKNumbers(arr) {
    let k = arr.shift(0);

    let firstK = arr.slice(0, k);
    let lastK = arr.slice(-k);

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));

}
//firstAndLastKNumbers([2, 7, 8, 9])
firstAndLastKNumbers([3, 6, 7, 8, 9])