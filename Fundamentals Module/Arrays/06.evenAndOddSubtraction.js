function evenAndOddSubtraction(array) {
    let evenNum = 0;
    let oddNum = 0;

    for (let el of array) {

        if (el % 2 === 0) {
            evenNum += el;
        } else {
            oddNum += el;
        }
    }

    const res = evenNum - oddNum;
    console.log(res);

}
evenAndOddSubtraction([1,2,3,4,5,6])
evenAndOddSubtraction([3,5,7,9])
evenAndOddSubtraction([2,4,6,8,10])