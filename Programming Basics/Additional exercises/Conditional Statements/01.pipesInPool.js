function pipesInPool(input) {
  const capacity = Number(input[0]);
  const P1 = Number(input[1]); 
  const P2 = Number(input[2]);
  const H = Number(input[3]).toFixed(2);

  const P1FilledWater = P1 * H;
  const P2FilledWater = P2 * H;
  const pipesFilledWaterTogether = P1FilledWater + P2FilledWater;
  const filledPoolPer = ((pipesFilledWaterTogether * 100) / capacity).toFixed(2);
  const P1FilledPer = (P1FilledWater * 100 / pipesFilledWaterTogether).toFixed(2);
  const P2FilledPer = (P2FilledWater * 100 / pipesFilledWaterTogether).toFixed(2);
  const redundantLitOfWater = (pipesFilledWaterTogether - capacity).toFixed(2)

  if (pipesFilledWaterTogether <= capacity) {
    console.log(`The pool is ${filledPoolPer}% full. Pipe 1: ${P1FilledPer}%. Pipe 2: ${P2FilledPer}%.`)
  } else {
    console.log(`For ${H} hours the pool overflows with ${redundantLitOfWater} liters.`)
  }

}
pipesInPool(["100", "100", "100", "2.5"])