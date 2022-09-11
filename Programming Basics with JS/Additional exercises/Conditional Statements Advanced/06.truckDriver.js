function truckDriver(input) {
    const season = input[0];
    const kmPerMonth = Number(input[1]);

    let pricePerKm = 0;
    let salary = 0;
    const workMonths = 4;

    if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
        pricePerKm = 1.45;
        salary = kmPerMonth * pricePerKm;
    }

    if (!(kmPerMonth > 10000 && kmPerMonth <= 20000)) {
    switch(season) {
        case "Spring":
        case "Autumn": 
            if(kmPerMonth <= 5000) {
                pricePerKm = 0.75;
                salary = kmPerMonth * pricePerKm;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                pricePerKm = 0.95;
                salary = kmPerMonth * pricePerKm;
            } break;
        case "Summer": if(kmPerMonth <= 5000) {
            pricePerKm = 0.9;
            salary = kmPerMonth * pricePerKm;
        } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
            pricePerKm = 1.1;
            salary = kmPerMonth * pricePerKm;
        } break;

        case "Winter": if(kmPerMonth <= 5000) {
            pricePerKm = 1.05;
            salary = kmPerMonth * pricePerKm;
        } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
            pricePerKm = 1.25;
            salary = kmPerMonth * pricePerKm;
        } break;
    }
}
    salary *= workMonths;
    salary -= salary * 0.1;
    console.log(salary.toFixed(2));

}
truckDriver(["Winter", "5670"])