function addAndSubstract(int1, int2, int3) {
  sum = (int1, int2) => {
    return int1 + int2;
  };

  substract = (sumFirstAndSecord, int3) => {
    return sumFirstAndSecord - int3;
  };

  let sumFirstAndSecord = sum(int1, int2);
  let finalRes = substract(sumFirstAndSecord, int3);
  console.log(finalRes);
}

addAndSubstract(23, 6, 10);
addAndSubstract(1, 17, 30);
addAndSubstract(42, 58, 100);
