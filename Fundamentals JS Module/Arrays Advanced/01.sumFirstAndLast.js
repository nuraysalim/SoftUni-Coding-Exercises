function sumFirstAndLast(arr) {
    let firstEl = arr[0];
    let lastEl = arr[arr.length-1];
    let sum = Number(firstEl) + Number(lastEl);

    console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['10', '5'])