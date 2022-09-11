function mergeArrays(arr1, arr2) {
    let index = arr1.length;
    let thirdArr = [];

    for(let i = 0; i < index; i++) {
        if(i % 2 === 0) {
            let sum = Number(arr1[i]) + Number(arr2[i]);
            thirdArr.push(sum);
        } else {
            let concatenation = arr1[i] + arr2[i];
            thirdArr.push(concatenation);
        }
    }

    console.log(thirdArr.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
)