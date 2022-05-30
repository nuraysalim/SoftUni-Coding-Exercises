function coins(input) {
    let coins = Number(input[0]);
    let change = parseInt(coins * 100); //123
    let coinsCounter = 0;

    while (change > 0) {
        if (change - 200 >= 0) {
            change -= 200;
        } else if (change - 100 >= 0) {
            change -= 100;
        } else if (change - 50 >= 0) {
            change -= 50;
        } else if (change - 20 >= 0) {
            change -= 20;
        } else if (change - 10 >= 0) {
            change -= 10;
        } else if (change - 5 >= 0) {
            change -= 5;
        } else if (change - 2 >= 0) {
            change -= 2;
        } else if (change - 1 >= 0) {
            change -=1;
        }
        coinsCounter++;
    }
 console.log(coinsCounter);
}
coins(["2.73"])