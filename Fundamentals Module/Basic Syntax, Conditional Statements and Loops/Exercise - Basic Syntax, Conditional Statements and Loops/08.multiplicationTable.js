function multiplicationTable(num) {
    for (let currentNum = 1; currentNum <= 10; currentNum++) { 
        console.log(`${num} X ${currentNum} = ${num * currentNum}`);
    }
}
multiplicationTable(5)