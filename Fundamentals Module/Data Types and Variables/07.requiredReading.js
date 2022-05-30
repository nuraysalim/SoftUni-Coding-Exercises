function requiredRead(pagesOfCurr, readPgInHour, deadLineInDays) {
    const totalTime = pagesOfCurr / readPgInHour;
    const requiredHours = totalTime / deadLineInDays;
    
    console.log(requiredHours);
}
requiredRead(212, 20, 2)
requiredRead(432, 15, 4)
