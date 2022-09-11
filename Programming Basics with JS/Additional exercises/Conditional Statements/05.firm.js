function firm(input) {
    const requiredTime = Number(input[0]);
    let availableDays = Number(input[1]);
    const numOfWorkersOvertime = Number(input[2]);

    let oneWorkDay = 8;
    let overtimeWorkHoursForAWeek = 2 * availableDays;

    let unavailbleDays = availableDays * 0.1; 
    availableDays -= unavailbleDays;
    
    let workHours = oneWorkDay * availableDays; 
    let overtimeHours = numOfWorkersOvertime * overtimeWorkHoursForAWeek;    
    const totalTime = Math.floor(workHours + overtimeHours);
    const leftOrNeededHours = Math.abs(totalTime - requiredTime);

    if(totalTime >= requiredTime) {
        console.log(`Yes!${leftOrNeededHours} hours left.`);
    } else {
        console.log(`Not enough time!${leftOrNeededHours} hours needed.`);
    }

}
firm(["50", "5", "2"])