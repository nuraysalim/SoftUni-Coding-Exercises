function tradeCommisions(input) {
    const city = input[0];
    const sales = Number(input[1]);
    let commision = sales;
    switch (city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500 ) {
                commision *= 0.05;
            } else if (sales > 500 && sales <= 1000) {
                commision *= 0.07;
            } else if (sales > 1000 && sales <= 10000) {
                commision *= 0.08;
            } else if (sales > 10000) {
                commision *= 0.12;
            } else {
                console.log("error");
            }
            break;
            case "Varna":
                if (sales >= 0 && sales <= 500 ) {
                    commision *= 0.045;
                } else if (sales > 500 && sales <= 1000) {
                    commision *= 0.075;
                } else if (sales > 1000 && sales <= 10000) {
                    commision *= 0.1;
                } else if (sales > 10000) {
                    commision *= 0.13;
                } else {
                    console.log("error");
                }
                break;
                case "Plovdiv":
                    if (sales >= 0 && sales <= 500 ) {
                        commision *= 0.055;
                    } else if (sales > 500 && sales <= 1000) {
                        commision *= 0.08;
                    } else if (sales > 1000 && sales <= 10000) {
                        commision *= 0.12;
                    } else if (sales > 10000) {
                        commision *= 0.145;
                    } else {
                        console.log("error");
                    }
                    break;
                    default: console.log("error")
    }
    if ((city === "Sofia" || city === "Varna" || city === "Plovdiv") & commision >= 0) {
    console.log(commision.toFixed(2))
    }
}


tradeCommisions(["Bourgas", "1500"])

