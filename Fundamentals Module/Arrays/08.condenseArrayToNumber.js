function condenseArrayToNumber(arr) {
    let index = arr.length;
    let finalSum = 0;
    let condenced = [];
    let smt = arr.length-1;
    if (index < 1) {

    } else {
        for (let a = smt; a >= 1; a--) {
                
            for (let i = 0; i < index-1; i++) {
                condenced[i] = arr[i] + arr[i+1];
            }

        }
    }
}
condenseArrayToNumber([5,0,4,1,2])