function previousDay(year, month, day) {
    const aDayBefore = new Date(year, month-1, day-1);
    
    console.log(`${aDayBefore.getFullYear()}-${aDayBefore.getMonth() + 1}-${aDayBefore.getDate()}`);
}
previousDay(2016, 9, 30)
previousDay(2016, 10, 1)

/* Another way of solving the problem: 
-Use a format -> date as string(interpolation 14/9/2022)
-Use .setDate() to get the date one day before
*/