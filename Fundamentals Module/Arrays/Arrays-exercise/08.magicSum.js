function magicSum(arr, target) {
    let index = arr.length;
    for(let i = 0; i < index; i++){
        let firstNum = arr[i];
        for(let j = i+1; j < index; j++){
            let secondNum = arr[j];
            let tempRes = firstNum + secondNum;
            if(tempRes === target) {
                console.log(`${firstNum} ${secondNum}`);
            } else {
                tempRes = 0;
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27)