function building(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let halls = "";

    for (let floor = x; floor > 0; floor--) {
        for (let room = 0; room < y; room++) {
            if (floor == x) {
                 halls += (`L${floor}${room} `);
            } else if (floor % 2 === 0) {
                halls += (`O${floor}${room} `);
            } else {
                halls += (`A${floor}${room} `)
            }
        }
        console.log(halls);
        halls = "";
    }
}
building(["1", "5"])