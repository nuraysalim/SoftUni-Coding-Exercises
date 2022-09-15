function posNegNum(arr) {
    let res = [];
    for (const num of arr) {
        if(num < 0) {
            res.unshift(num)
        } else {
            res.push(num)
        }
    }
        console.log(res.join('\n'));
}
posNegNum([7, -2, 8, 9])
console.log('--------------');
posNegNum([3, -2, 0, -1])