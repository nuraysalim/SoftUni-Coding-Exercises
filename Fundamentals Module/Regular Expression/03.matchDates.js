function matchDates(date) {
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let match = pattern.exec(date);
    
    while(match !== null) {
        let day = match.groups['day'];
        let month = match.groups['month'];
        let year = match.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        match = pattern.exec(date);
    }
}
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'])