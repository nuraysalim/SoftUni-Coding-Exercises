function arrayRotation(arr, rotations) {
    let index = arr.length;
    let newArr = [];
    
    for(let i = 0; i < rotations; i++){
        let tempValue = arr[0];
        for(let j = 1; j < index; j++){
            let value = arr[j];
            newArr[newArr.length] = value;
        }
        newArr.push(tempValue);
        arr = newArr;
        newArr = [];
    }

    console.log(arr.join(" "));
    
}
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)