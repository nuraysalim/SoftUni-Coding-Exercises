function heartDelivery(input) {
    let neighborhood = input.shift().split('@');
    let index = 0;
    let command = input[index];
    index++;
    let positionOfCupid = 0;
    let isSuccess = true;
    let houseCountFails = 0;
    let lastPosition;

    while(command !== 'Love!') {
        let currCommand = command.split(' ');
        positionOfCupid += Number(currCommand[1]);

        if(neighborhood[positionOfCupid] === undefined) {
            positionOfCupid = 0;
        }

        if(neighborhood[positionOfCupid] === 0) {
            console.log(`Place ${positionOfCupid} already had Valentine's day.`);
        } else {
            neighborhood[positionOfCupid] -= 2;
            if(neighborhood[positionOfCupid] === 0) {
                console.log(`Place ${positionOfCupid} has Valentine's day.`);
            }
        }

        lastPosition = positionOfCupid;

        command = input[index];
        index++;
    }

    for(let house of neighborhood) {
        if(house > 0) {
            isSuccess = false;
            houseCountFails++;
        }
    }

    console.log(`Cupid's last position was ${lastPosition}.`);
    if(isSuccess) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${houseCountFails} places.`);
    }
}
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])
