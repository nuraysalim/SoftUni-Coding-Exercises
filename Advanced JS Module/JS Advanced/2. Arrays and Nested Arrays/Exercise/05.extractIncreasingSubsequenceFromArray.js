function extracting(arr) {
    // let res = [arr[0]];
    // let currBiggest = arr[0];

    // for (let i = 1; i < arr.length; i++) {
    //     if(currBiggest <= arr[i]) {
    //         currBiggest = arr[i];
    //         res.push((arr[i]));
    //     }
    // }

    // return res;  

    let biggestValue = arr[0];

    let res = arr.reduce((acc, currValue) => {
        if(currValue >= biggestValue) {
            biggestValue = currValue;
            acc.push(currValue);
        }
        return acc;
    }, []);

    console.log(res);
}
extracting([1, 2, 3, 4])