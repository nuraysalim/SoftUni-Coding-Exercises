function solve(year, month, day) {
    ++day;
    
    if (day > 30) {
      day = 1;
      ++month;
    } else if (month > 12) {
      month = 1;
      ++year;
    } else if (year === 1 && month === 1 && day === 2) {
      year = 1901;
    }

    console.log(`${year}-${month}-${day}`);

  }

  solve(1, 1, 1)