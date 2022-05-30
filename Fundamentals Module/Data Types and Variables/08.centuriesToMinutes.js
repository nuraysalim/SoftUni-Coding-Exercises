function centuriesToMinutes(centuries) {
    const centuryToYears = Math.floor(100 * centuries);
    const yearsToDays = Math.floor(365.2422 * centuryToYears);
    const daysToHours = Math.floor(24 * yearsToDays);
    const hoursToMinutes = Math.floor(60 * daysToHours);

    console.log(`${centuries} centuries = ${centuryToYears} years = ${yearsToDays} days = ${daysToHours} hours = ${hoursToMinutes} minutes`);
}
centuriesToMinutes(5)