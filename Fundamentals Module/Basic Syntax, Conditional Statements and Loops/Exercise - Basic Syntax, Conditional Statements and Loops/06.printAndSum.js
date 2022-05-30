function printAndSum(numberA, numberB) {
    let sum = 0;
    let nums = ''
    for (i = numberA; i <= numberB; i++) {
        if (i === numberB) {
        nums += i + ''
        } else {
        nums += i + ' '
        } 
        sum += i
    }
    console.log (nums)
    console.log(`Sum: ${sum}`)
}
printAndSum(5,10)