function daysInAMonth(month, year) {
    let days;
    let test;
    let check;

 let dateObj = new Date(year, month-1);
const getMonth = dateObj.getMonth();

if(getMonth == 1) {
    test = new Date(year, month-1, 29);
    check = test.getMonth();

    if(getMonth != check) {
        days = 28;
    } else {
        days = 29;
    }
} else {
    test = new Date(year, month-1, 31);
    check = test.getMonth();

    if(getMonth != check) {
        days = 30;
    } else {
        days = 31;
    }
}

console.log(days);
}
daysInAMonth(8, 2022)