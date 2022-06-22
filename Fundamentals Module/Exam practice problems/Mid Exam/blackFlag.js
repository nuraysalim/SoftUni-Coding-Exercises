function blackFlag(input) {
    let days = input[0];
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);

    let plunder = 0;

    for (let i = 1; i <= days; i++) {
        plunder += dailyPlunder;

        if(i % 3 === 0) {
            plunder += dailyPlunder * 0.5;
        }

        if(i % 5 === 0) {
            let lost = plunder * 0.3;
            plunder -= lost;
        }
    }

    if(plunder >= expectedPlunder) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    } else {
        let perLeft = plunder * 100 / expectedPlunder;
        console.log(`Collected only ${perLeft.toFixed(2)}% of the plunder.`);
    }
}
// blackFlag(["5",
// "40",
// "100"])
blackFlag(["10",
"20",
"380"])

