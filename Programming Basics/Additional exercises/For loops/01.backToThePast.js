function backToThePast(input) {
    let index = 0;
    let inheritedMoney = Number(input[index]);
    index++;
    let theEndYear = Number(input[index]);
    index++;

    let age = 18;
    let spendings = 0;

    for(let i = 1800; i <= theEndYear; i++) {
         if (i % 2 === 0) {
            spendings += 12000;
        } else {
            spendings += 12000 + 50 * age;
        }
        age++;
    }

    let diff = Math.abs(inheritedMoney - spendings);
    
    if (inheritedMoney >= spendings) {
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`)
    }
}

backToThePast(["100000.15", "1808"])