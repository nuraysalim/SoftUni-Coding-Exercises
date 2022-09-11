function agencyProfit(input) {
    const nameOfAvioCompany = input[0];
    const ticketsForAdults = Number(input[1]);
    const ticketsForKids = Number(input[2]);
    const priceForAdultTicket = Number(input[3]);
    let priceForKidTicket = 0;
    priceForKidTicket = priceForAdultTicket * 0.3;
    const servicePrice = Number(input[4]);

    let servicePriceForAllTickets = servicePrice * (ticketsForAdults + ticketsForKids);
    let money = (ticketsForAdults * priceForAdultTicket) + (ticketsForKids * priceForKidTicket);
    let totalMoney = servicePriceForAllTickets + money;

    let profit = totalMoney * 0.2;

    console.log(`The profit of your agency from ${nameOfAvioCompany} tickets is ${profit.toFixed(2)} lv.`);


}
agencyProfit(["WizzAir", "15", "5", "120", "40"])
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"])