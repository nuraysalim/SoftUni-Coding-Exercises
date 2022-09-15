/*
function previousDay(year, month, day) {
    const aDayBefore = new Date(year, month-1, day-1);
    
    console.log(`${aDayBefore.getFullYear()}-${aDayBefore.getMonth() + 1}-${aDayBefore.getDate()}`);
}
previousDay(2016, 9, 30)
previousDay(2016, 10, 1)
*/

/* Another way of solving the problem: 
-Use a format -> date as string(interpolation 14/9/2022) ** Apparently you cannot use .setDate()
on a new Date(`${year}, ${month}, ${day}`), also if you give a value of 0 to day - new Date()
returns NaN.
-Use .setDate() to get the date one day before 
*/
function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(day - 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
}
previousDay(2016, 9, 30)
console.log('------------------');
previousDay(2016, 10, 1)