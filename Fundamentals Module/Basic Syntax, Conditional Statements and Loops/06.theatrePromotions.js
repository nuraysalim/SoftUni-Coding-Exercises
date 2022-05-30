function theatreProm(type, num) {

    let price = 0;

    if (num >= 0 && num <= 18) {
        switch (type) {
            case 'Weekday': price = 12; break;
            case 'Weekend': price = 15; break;
            case 'Holiday': price = 5; break;

        } 
    } else if (num > 18 && num <= 64) { 
        switch (type) {
            case 'Weekday': price = 18; break;
            case 'Weekend': price = 20; break;
            case 'Holiday': price = 12; break;
    } 
    } else if (num > 64 && num <= 122) {
        switch (type) {
            case 'Weekday': price = 12; break;
            case 'Weekend': price = 15; break;
            case 'Holiday': price = 10; break;
    } 
    } else {
        console.log('Error!');
    }


    if (price !== 0) {
        console.log(`${price}$`);
    }
}
theatreProm('Weekday', 123)