function solve(year, month, day) {
  ++day;
  --month;

  if (day > 30) {
    day = 1;
    ++month;
  } else if (month > 11) {
    month = 1;
    ++year;
  }
  let d = new Date(year, month, day);

  month = month;

  const yeAr = d.getFullYear();
  const date = d.getDate();
  let monthIndex = d.getMonth();
  ++monthIndex;

  
console.log(`${yeAr}-${monthIndex}-${date}`);


  }

 // solve(2016, 9, 30);
  solve(1951, 12, 24);
