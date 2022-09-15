function timeToWalk(steps, footprint, speed) {
    /*\How to solve the problem instructions:
    - We find the distance in meters by multiplying the steps with the footprint;
    - Transform the speed into m/s by deviding the speed by 3.6;
    - Then find the time;
    - You should find the time in minutes, then in seconds and in hours;
    - Pay attention what happens when minutes are more than 60;
    - And format the results in such a way to be double digits;  
    */

    let distance = steps * footprint;
    let speedInMeter = speed / 3.6;
    let walkTime = distance / speedInMeter;
    let restTime = Math.floor(distance / 500);

    let timeInMin = Math.floor(walkTime / 60) + restTime;
    let timeInSec = Number(((walkTime + (restTime * 60)) - (timeInMin * 60)).toFixed(0));
    let timeInH = Math.floor((walkTime + (restTime * 60)) / 3600);
    timeInH = Math.floor(timeInMin / 60);
    timeInMin = Math.floor(timeInMin % 60);
    

    let formattedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
    let formattedMin = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let formattedSec = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

    console.log(`${formattedH}:${formattedMin}:${formattedSec}`);
}
timeToWalk(4000, 0.60, 5)