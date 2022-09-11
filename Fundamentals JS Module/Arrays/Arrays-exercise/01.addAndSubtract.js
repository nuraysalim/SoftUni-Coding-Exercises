function addAndSubtract(arr) {
    let sumOfOriginal = 0;
    let sumOfModified = 0;
    let index = arr.length;

    for(let el of arr) {
        sumOfOriginal += el;
        }

    for(let i = 0; i < index; i++) {
        if(arr[i] % 2 === 0) {
            arr[i] = arr[i] + i;
        } else {
            arr[i] = arr[i] - i;
        }
        sumOfModified += arr[i];
    }

    console.log(arr);
    console.log(sumOfOriginal);
    console.log(sumOfModified);
    
}
addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])