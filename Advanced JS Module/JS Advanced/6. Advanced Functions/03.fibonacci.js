function getFibonator() {
    let arr = [0, 1];
    let firstOnePrinted = false;
    let res;
    return function fibonacci() {
        if(firstOnePrinted) {
             res = arr[arr.length - 2] + arr[arr.length - 1];;
            arr.push(res);
        } else {
            res = 1;
            firstOnePrinted = true;
        }
        return res;
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13