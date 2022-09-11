function squareOfStars(n = 5) {
    for(let i = 0; i < n; i++) {
        let line = '* '.repeat(n);
        console.log(line);
    }
}
squareOfStars()