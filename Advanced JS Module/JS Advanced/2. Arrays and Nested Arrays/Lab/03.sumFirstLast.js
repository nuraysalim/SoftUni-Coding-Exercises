function sumFirstLast(arr) {
    let res = Number(arr.slice(0,1)) + Number(arr.slice(-1));
    return res;
}
console.log(sumFirstLast(['20', '30', '40']))
console.log('---------------');
console.log(sumFirstLast(['5']));