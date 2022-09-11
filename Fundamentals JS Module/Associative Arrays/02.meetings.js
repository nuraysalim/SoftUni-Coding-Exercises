function meetings(data) {
    let schedule = {};

    for(let line of data) {
        let person = line.split(' ');
        let day = person[0];

        if(schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = person[1];
            console.log(`Scheduled for ${day}`);
        }
    }

    for(let key in schedule) {
        console.log(key, '->', schedule[key]);
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])