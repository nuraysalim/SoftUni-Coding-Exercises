function skiTrip(input) {
    const daysForStay = Number(input[0]);
    const nights = daysForStay - 1;
     const kindOfRoom= input[1];
     const experience = input[2];

     const roomForOnePrice = 18;
     const apartmentPrice = 25;
    const presidentApartmentPrice = 35;
    let cost = 0;

    if (kindOfRoom === "room for one person") {
     cost = nights * roomForOnePrice; 
}
    
 if (daysForStay < 10){
        switch (kindOfRoom) {
            case "apartment": cost = nights * apartmentPrice;
            cost -= cost * 0.3; break; 
            case "president apartment": cost = nights * presidentApartmentPrice;
            cost -= cost * 0.1; break;
         }
    } else if (daysForStay >= 10 && daysForStay <= 15 ) {
        switch (kindOfRoom) {
            case "apartment": cost = nights * apartmentPrice;
            cost -= cost * 0.35; break;
            case "president apartment": cost = nights * presidentApartmentPrice;
                 cost -= cost * 0.15; break;
        } 
    } else if (daysForStay > 15) {
        switch (kindOfRoom) {
            case "apartment": cost = nights * apartmentPrice;
            cost -= cost * 0.5; break;
            case "president apartment": cost = nights * presidentApartmentPrice;
                 cost -= cost * 0.2; break;
        }
    } 
     if (experience === "positive") {
        cost += cost * 0.25;
    } else if (experience === "negative") {
        cost -= cost * 0.1;
    }
     console.log(cost.toFixed(2));
}

skiTrip(["2",
"apartment",
"positive"])



