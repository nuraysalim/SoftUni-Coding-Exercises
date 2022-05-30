function triangleOfNumbers(number) {
    for (let row = 1; row <= number; row++) {
        let printLine = ''
        for(let nums = 1; nums <= row; nums++) {
            printLine += `${row} `

        }
        console.log(printLine)
    }
}
triangleOfNumbers(5)