function rounding(num, precisionNum) {
  let x = precisionNum;

  if (x > 15) {
    x = 15;
  }

  num = num.toFixed(x);

  console.log(parseFloat(num));
}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);
