function maxSequenceOfEqualElements(arr) {
    let index = arr.length;
    let maxSequence = [];

    for(let i = 0; i < index; i++){
        let currSequence = [];
        for(let j = i; j < index; j++) {
            if(arr[i] === arr[j]) {
                currSequence.push(arr[i])
            } else {
                break; 
            }
        }

        if(currSequence.length > maxSequence.length){
            maxSequence = currSequence;
        }
    }
    console.log(maxSequence.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])