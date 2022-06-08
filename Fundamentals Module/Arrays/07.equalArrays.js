function equalArrays(arr1, arr2) {
    let index = arr1.length;
    let indexWhereDiff = 0;
    let isIdentical = false;
    let sum = 0; 

    for(let i = 0; i < index; i++) {
        let tempValue1 = arr1[i];
        let tempValue2 = arr2[i];

        if(tempValue1 !== tempValue2) {
            indexWhereDiff = i;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIdentical = false;
            break;
        } else {
            isIdentical = true;
        }
    }

    if (isIdentical) {
        for (let el of arr1) {
            sum += Number(el); 
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
//equalArrays(['10','20','30'], ['10','20','30'])
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])