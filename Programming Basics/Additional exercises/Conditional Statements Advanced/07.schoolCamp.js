function schoolCamp(input) {
    const season = input[0];
    const group = input[1];
    const numOfStudents = Number(input[2]);
    const numOfNights = Number(input[3]);

    let pricePerNight = 0;
    let totalPrice = 0;
    let sport = "";

    switch(season) {
        case "Winter": 
            switch(group) {
                case "boys": pricePerNight = 9.6 
                sport = "Judo"; break;
                case "girls": pricePerNight = 9.6
                 sport = "Gymnastics"; break;
                case "mixed": pricePerNight = 10
                 sport = "Ski"; break;
    } break;
        case "Spring":
        switch(group) {
            case "boys": pricePerNight = 7.2
             sport = "Tennis"; break;
            case "girls": pricePerNight = 7.2
             sport = "Athletics"; break;
            case "mixed": pricePerNight = 9.5
             sport = "Cycling"; break;
    } break;

        case "Summer": 
        switch(group) {
            case "boys": pricePerNight = 15
             sport = "Football"; break;
            case "girls": pricePerNight = 15
             sport = "Voleyball"; break;
            case "mixed": pricePerNight = 20
             sport = "Swimming"; break;
    } break;
 } 

    totalPrice = numOfStudents * numOfNights * pricePerNight;

 if (numOfStudents >= 50) {
     totalPrice -= totalPrice * 0.5;
 } else if (numOfStudents >= 20 && numOfStudents < 50) {
     totalPrice -= totalPrice * 0.15;
 } else if (numOfStudents >= 10 && numOfStudents < 20) {
     totalPrice -= totalPrice * 0.05;
 }

 console.log(`${sport} ${totalPrice.toFixed(2)} lv.`)

}
schoolCamp(["Winter", "mixed", "9", "15"])