function printNthEl(arr, num) {
    let res = [];

    for(let i = 0; i < arr.length; i += num) {
        res.push(arr[i]);
    }

    return res;
}
console.log(printNthEl(['1', 
'2',
'3', 
'4', 
'5'], 
6))