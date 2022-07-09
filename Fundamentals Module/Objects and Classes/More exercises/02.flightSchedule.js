function flightSchedule(arrayWithArr) {
    let flights = arrayWithArr[0];
    let newStatuses = arrayWithArr[1];
    let statusToCheck = arrayWithArr[2].toString();

    let allFlights = [];

    for(const el of flights) {
        let [plane, destination] = el.split(' ');
        let flight = {
            plane,
            destination
        };
        allFlights.push(flight);
    }

    for(const newStatus of newStatuses) {
        let [plane, status] = newStatus.split(' ');
        allFlights.forEach(flight => {
            if(flight.plane === plane) {
                flight.status = status;
            }
        });
    }


    if (statusToCheck === 'Ready to fly') {
        allFlights.forEach(flight => {
            if(!flight.status) {
                flight.status = 'Ready to fly';
                console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
            } 
        })
    } else {
    allFlights.forEach(flight => {
        if(flight.status){
            console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`)
        }
    })
}
}
flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
])