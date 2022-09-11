function distinctArray(arr) {
    let uniqueArr = [];

    for(let el of arr) {
        if(!uniqueArr.includes(el)) {
            uniqueArr.push(el);
        }
    }

    console.log(uniqueArr.join(" "));
}
distinctArray([7, 8, 2, 9, 7, 2, 3, 4, 7, 1, 2])