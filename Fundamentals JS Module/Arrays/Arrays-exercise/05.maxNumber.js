function maxNumber(arr) {
    let index = arr.length;
    let topInt = [];
   

    for(let i = 0; i < index; i++) {
        let el = arr[i];
        let isLargest = true;
        for(let j = i+1; j < index; j++) {
            let el2 = arr[j];
            if (el < el2) {
                isLargest = false;
                break;
            }
            }
            if (isLargest) {
                topInt.push(el);
            }
        }
    
        console.log(topInt.join(" "));
    }



maxNumber([14, 24, 3, 19, 15, 17])
//maxNumber([41, 41, 34, 20])
//maxNumber([27, 19, 42, 2, 13, 45, 48])
//maxNumber([1, 4, 3, 2])