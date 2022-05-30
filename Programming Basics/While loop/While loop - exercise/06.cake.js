function cake(input) {
    let widht = Number(input[0]);
    let length = Number(input[1]);
    let piecesOfCake = widht * length;
    let index = 2;
    let command = input[index];
    index++;

    while(command !== "STOP"){
        let eatenPiecesOfCake = Number(command);
        piecesOfCake -= eatenPiecesOfCake;
        if (piecesOfCake <= 0) {
            console.log(`No more cake left! You need ${Math.abs(piecesOfCake)} pieces more.`);
            break;
        }
        command = input[index];
        index++
    }

    if (command === "STOP") {
        console.log(`${piecesOfCake} pieces are left.`)
    }
}
cake(["10", "10", "20", "20", "20", "20", "21"])
