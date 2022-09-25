function extracting(arr) {
    let res = [arr[0]];
    let currBiggest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(currBiggest <= arr[i]) {
            currBiggest = arr[i];
            res.push((arr[i]));
        }
    }

    return res;  
}
extracting([20, 
    3, 
    2, 
    15,
    6, 
    1])