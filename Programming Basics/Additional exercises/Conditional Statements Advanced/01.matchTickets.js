function matchTickets(input) {
    let budget = Number(input[0]);
    const category = input[1];
    const numOfPeople = Number(input[2]);

    const vipTicketPrice = 499.99;
    const normalTicketPrice = 249.99;

    let costForTickets = 0;
    let leftOrNeededMoney = 0;

    if (numOfPeople >= 1 && numOfPeople <= 4) {
        budget -= budget * 0.75;  
    } else if (numOfPeople >= 5 && numOfPeople <= 9) { 
        budget -= budget * 0.6;
    } else if (numOfPeople >= 10 && numOfPeople <= 24) {
        budget -= budget * 0.5;
    } else if (numOfPeople >= 25 && numOfPeople <= 49) {
        budget -= budget * 0.4;
    } else if (numOfPeople >= 50) {
        budget -= budget * 0.25;
    }

    switch (category) {
        case "VIP": costForTickets = numOfPeople * vipTicketPrice;
        leftOrNeededMoney = Math.abs(budget - costForTickets); break;
        case "Normal": costForTickets = numOfPeople * normalTicketPrice;
        leftOrNeededMoney = Math.abs(budget - costForTickets); break;
    }

    if (budget >= costForTickets) {
        console.log(`Yes! You have ${leftOrNeededMoney.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${leftOrNeededMoney.toFixed(2)} leva.`);
    }
}
matchTickets(["30000", "VIP", "49"])	
