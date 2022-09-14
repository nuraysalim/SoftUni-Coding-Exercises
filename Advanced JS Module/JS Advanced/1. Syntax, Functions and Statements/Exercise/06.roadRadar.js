function roadRadar(speed, area) {
    let speedLimit;

    switch (area) {
        case 'motorway': speedLimit = 130;
            break;
        case 'interstate':  speedLimit = 90;
            break;
        case 'city': speedLimit = 50;
            break;
        case 'residential': speedLimit = 20;
            break;
    }

    if(speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        let differenceInSpeed = speed - speedLimit;
        let status = differenceInSpeed <= 20 ? 'speeding'
                    : differenceInSpeed <= 40 ? 'excessive speeding'
                    : 'reckless driving';

        console.log(`The speed is ${differenceInSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}
roadRadar(40, 'city')
console.log('------------------');
roadRadar(200, 'motorway')
console.log('----------------');
roadRadar(21, 'residential')