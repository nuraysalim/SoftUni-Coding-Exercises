function negativeOrPositiveNumbers(arr) {
    let newArr = [];

    for(let el of arr) {
        el = Number(el);

        if(el < 0) {
            newArr.unshift(el);
        } else {
            newArr.push(el)
        }
    }

    console.log(newArr.join('\n'));
}
//negativeOrPositiveNumbers(['7', '-2', '8', '9'])
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])