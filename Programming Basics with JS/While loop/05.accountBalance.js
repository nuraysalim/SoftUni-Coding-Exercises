function accountBalance(input) {
    let index = 0;
    let account = input[index]; 
    index++;

    let money = 0


    while(account !== "NoMoreMoney") {
        cash = Number(account);

        if (cash < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${cash.toFixed(2)}`);
        money += cash;

        account = input[index]; 
        index++
    }

    console.log("Total: " + money.toFixed(2));
}

accountBalance(["120",
"45.55",
"-150", "1983"])

