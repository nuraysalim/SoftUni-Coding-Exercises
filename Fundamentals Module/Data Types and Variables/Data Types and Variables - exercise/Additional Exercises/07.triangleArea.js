function triangleArea(sideA, sideB, sideC) {
  let p = (sideA + sideB + sideC) / 2;

  let heronsFormula = Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC));

  console.log(heronsFormula);
}
triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4)