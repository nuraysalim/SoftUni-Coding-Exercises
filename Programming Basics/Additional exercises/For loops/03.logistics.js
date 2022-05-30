function logistics(input) {
    let index = 0;
    let numOfFreight = Number(input[index]);
    index++;

    let moneyForTransport = 0;
    let totalTons = 0; 
    let transportedTonsByMinibus = 0;
    let transportedTonsByLorry = 0;
    let transportedTonsByTrain = 0;

    for(let i = 1; i <= numOfFreight; i++) {
        let tonsFreight = Number(input[index]);
        index++;
        totalTons += tonsFreight;

        if (tonsFreight <= 3) {
            transportedTonsByMinibus += tonsFreight;
            moneyForTransport += tonsFreight * 200;
        } else if (tonsFreight >= 4 && tonsFreight <= 11) {
            transportedTonsByLorry += tonsFreight;
            moneyForTransport += tonsFreight * 175;
        } else {
            transportedTonsByTrain += tonsFreight;
            moneyForTransport += tonsFreight * 120;
        }
        
    }

    let avgPriceForTon = moneyForTransport / totalTons;
    let avgPerTranspByMiniBus = transportedTonsByMinibus / totalTons * 100;
    let avgPerTranspByLorry = transportedTonsByLorry / totalTons * 100;
    let avgPerTranspByTrain = transportedTonsByTrain / totalTons * 100;

    console.log(avgPriceForTon.toFixed(2));
    console.log(`${avgPerTranspByMiniBus.toFixed(2)}%`);
    console.log(`${avgPerTranspByLorry.toFixed(2)}%`);
    console.log(`${avgPerTranspByTrain.toFixed(2)}%`);
    
}

logistics(["5", "2", "10", "20", "1", "7"])