function reverse(arr) {
    let index = arr.length-1;

    for (i = 0; i < index; i++) {
        let tempValue = arr[index];
        arr[index] = arr[i];
        arr[i] = tempValue;
        index--;
    }

    console.log(arr.join(' '))
}
reverse(['a', 'b', 'c', 'd', 'e'])
reverse(['abc', 'def', 'hig', 'klm', 'nop'])
reverse(['33', '123', '0', 'dd'])