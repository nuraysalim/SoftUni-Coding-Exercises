function condenseArrayToNumber(arr) {
    if(arr.length === 1) {
        console.log(`${arr}`);
    } else {
    while(arr.length > 1) {
        let condencedArr = [];
        for (let i = 0; i < arr.length-1; i++) {
            condencedArr[i] = arr[i] + arr[i + 1];
        }
        arr = condencedArr;
    }
    console.log(Number(arr));
}
 
}
condenseArrayToNumber([5,0,4,1,2])
condenseArrayToNumber([2, 10, 3])