function computerFirm(input) {
  const n = Number(input[0]);
  let index = 1;
  let sales = 0;
  let ratingRatio = 0

  for(let i = 0; i < n; i++) {
      let computer = "" + input[index];
      index++
      let rating = Number(computer[2]);
      ratingRatio += rating;
      let possibleSales = computer[0] + computer[1];

      if(rating === 3) {
          sales += Number(possibleSales) / 2;
      } else if(rating === 4) {
          sales += Number(possibleSales) * 0.7;
      } else if(rating === 5) {
          sales += Number(possibleSales) * 0.85;
      } else if(rating === 6) {
        sales += Number(possibleSales)
      }
  }

  console.log(`${sales.toFixed(2)}`);
  console.log(`${(ratingRatio / n).toFixed(2)}`);
}
computerFirm(["2",
"204",
"206"])
