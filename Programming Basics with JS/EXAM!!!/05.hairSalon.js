function hairSalon(input) {
  const dailyGoal = Number(input[0]);
  let index = 1;
    let command = input[index];
    index++;
    let money = 0;

    while(command !== "closed") {
        let service = command;
        let outcome = input[index];
        switch(service) {
            case "haircut":
                switch(outcome) {
                    case "mens":
                        money += 15;
                        break;
                    case "ladies":
                        money += 20;
                        break;
                    case "kids":
                        money += 10;
                        break;
                }
                break;
            case "color":
                switch(outcome) {
                    case "touch up":
                        money += 20;
                        break;
                    case "full color":
                        money += 30;
                        break;
                }
                break;
        }
        if(money >= dailyGoal) {
            console.log(`You have reached your target for the day!`);
            break;
        }

        command = input[index];
        index++;
    }

if(command === "closed") {
    let diff = dailyGoal - money;
    console.log(`Target not reached! You need ${diff}lv. more.`);
} 

console.log(`Earned money: ${money}lv.`);

}
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])
