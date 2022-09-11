function multiplyBy2(input) {
for(let i = 0; i <= input.length; i++) {
    let number = Number(input[i]);

    if(number < 0) {
        console.log("Negative number!");
        break;
    } else {
        let res = number * 2;
        console.log(`Result: ${res.toFixed(2)}`);
    }
}
}
multiplyBy2(["-20"])