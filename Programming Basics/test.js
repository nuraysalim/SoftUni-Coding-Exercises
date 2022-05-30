function solve(year, month, day) {
  if (day < 31) {
   day += 1;
  } else {
    day = 1;
    month += 1
  }

  if (month > 12) {
    month = 1;
  }

console.log(new Date(year, month, day)); 


}
solve(2016, 9, 31);
