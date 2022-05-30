function clockPart2() {
for(let h = 0; h <= 23; h++) {
    for(let min = 0; min <= 59; min++) {
        for(let s = 0; s <= 59; s++) {
            console.log(`${h} : ${min} : ${s} `)
        }
    }
}
}
clockPart2()