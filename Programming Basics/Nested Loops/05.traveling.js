function traveling(input) {
    let index = 0
    let command = input[index];
    index++;
    let money = 0
    while (command !== "End") {
        let destination = command;
        let costs = Number(input[index]);
        index++;
        for(let a = money; a <= costs; a++){
        let savedMoney = Number(input[index]);
        index++
        money += savedMoney;
        if (money >= costs) {
            break;
        }
    }
        console.log(`Going to ${destination}! `);
        money = 0;
        command = input[index];
        index++;
 } 
}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
