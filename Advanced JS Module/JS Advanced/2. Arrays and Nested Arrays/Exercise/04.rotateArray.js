function rotateArr(arr, rotations) {
    let rotationsCount = 0;
    let res = arr;

    while(rotationsCount < rotations) {
        let lastEl = res.pop();
        res.unshift(lastEl);

        rotationsCount++;
    }

    console.log(res.join(' '));
}
rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)