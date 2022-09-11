function courierExpress(input) {
    const weight = Number(input[0]);
    const typeOfService = input[1];
    const distance = Number(input[2]);
    let pricePerKm = 0;
    let deliveryPrice = 0;
    let markup = 0;
    let deliveryMarkUp = 0;
    let priceAfterMarkup = 0;
    let totalSum = 0;
    if(typeOfService === "standard") {
        if(weight < 1) {
            pricePerKm = 0.03;
            deliveryPrice = distance * pricePerKm
            totalSum = deliveryPrice;
        } else if(weight >= 1 && weight < 10) {
            pricePerKm = 0.05;
            deliveryPrice = distance * pricePerKm;
            totalSum = deliveryPrice;
        } else if(weight >= 10 && weight < 40) {
            pricePerKm = 0.1;
            deliveryPrice = distance * pricePerKm;
            totalSum = deliveryPrice;
        } else if(weight >= 40 && weight < 90) {
            pricePerKm = 0.15;
            deliveryPrice = distance * pricePerKm;
            totalSum = deliveryPrice;
        } else if(weight >= 90 && weight < 150) {
            pricePerKm = 0.20;
            deliveryPrice = distance * pricePerKm;
            totalSum = deliveryPrice;
        }
     } else {
        if(weight < 1) {
            pricePerKm = 0.03;
             markup = pricePerKm * 0.8;
             deliveryMarkUp = weight * markup;
             priceAfterMarkup = distance * deliveryMarkUp;
            deliveryPrice = distance * pricePerKm
            totalSum = deliveryPrice + priceAfterMarkup;
        } else if(weight >= 1 && weight < 10) {
            pricePerKm = 0.05;
            markup = pricePerKm * 0.4;
            deliveryMarkUp = weight * markup;
            priceAfterMarkup = distance * deliveryMarkUp;
            deliveryPrice = distance * pricePerKm;
            totalSum = deliveryPrice + priceAfterMarkup;
        } else if(weight >= 10 && weight < 40) {
            pricePerKm = 0.1;
             markup = pricePerKm * 0.05;
             deliveryMarkUp = weight * markup;
             priceAfterMarkup = distance * deliveryMarkUp;
            deliveryPrice = distance * pricePerKm;
            totalSum = deliveryPrice + priceAfterMarkup;
        } else if(weight >= 40 && weight < 90) {
            pricePerKm = 0.15;
           markup = pricePerKm * 0.02;
           deliveryMarkUp = weight * markup;
           priceAfterMarkup = distance * deliveryMarkUp;
            deliveryPrice = distance * pricePerKm;
            totalSum = deliveryPrice + priceAfterMarkup;
        } else if(weight >= 90 && weight < 150) {
            pricePerKm = 0.20;
            markup = pricePerKm * 0.01;
            deliveryMarkUp = weight * markup;
            priceAfterMarkup = distance * deliveryMarkUp;
            deliveryPrice = distance * pricePerKm;
            totalSum = deliveryPrice + priceAfterMarkup;
        }
     }
    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${totalSum.toFixed(2)} lv.`)
}
courierExpress(["20",
"standard",
"349"])

