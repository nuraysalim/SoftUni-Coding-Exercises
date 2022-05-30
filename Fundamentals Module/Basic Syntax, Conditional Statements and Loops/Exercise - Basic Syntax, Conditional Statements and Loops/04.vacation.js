function vacation(numOfGroup, typeOfGroup, dayOfTheWeek) {
    let pricePerPerson = 0;
    let cost = 0;

    switch (typeOfGroup) {
        case 'Students': 
         switch(dayOfTheWeek) {
             case 'Friday': pricePerPerson = 8.45; break;
             case 'Saturday': pricePerPerson = 9.8; break;
             case 'Sunday': pricePerPerson = 10.46; break;
         }
         cost = numOfGroup * pricePerPerson;
         if (numOfGroup >= 30) {
             cost -= cost * 0.15;
         }
        break;
        case 'Business': 
         switch(dayOfTheWeek) {
            case 'Friday': pricePerPerson = 10.9; break;
            case 'Saturday': pricePerPerson = 15.6; break;
            case 'Sunday': pricePerPerson = 16; break;
        }
        cost = numOfGroup * pricePerPerson;
        if (numOfGroup >= 100) {
            cost -= 10 * pricePerPerson;
        }
        break;
        case 'Regular': 
         switch(dayOfTheWeek) {
            case 'Friday': pricePerPerson = 15; break;
            case 'Saturday': pricePerPerson = 20; break;
            case 'Sunday': pricePerPerson = 22.5; break;
        }
        cost = numOfGroup * pricePerPerson;
        if (numOfGroup >= 10 && numOfGroup <= 20) {
            cost -= cost * 0.05;
        }
        break;
}
    console.log(`Total price: ${cost.toFixed(2)}`)
}
vacation(30, "Students","Sunday")
vacation(40,"Regular","Saturday")
