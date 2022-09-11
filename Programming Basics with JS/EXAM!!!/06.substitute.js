function substitute(input) {
  const K = Math.abs(Number(input[0]));
  const L = Math.abs(Number(input[1]));
  const M = Math.abs(Number(input[2]));
  const N = Math.abs(Number(input[3]));
  let counter = 0;

  for (let a = K; a <= 8; a++) {
    for (let b = 9; b >= L; b--) {
      for (let c = M; c <= 8; c++) {
        for (let d = 9; d >= N; d--) {
          if (a % 2 === 0 && c % 2 === 0 && b % 2 !== 0 && d % 2 !== 0) {
            if (a === c && b === d) {
              console.log("Cannot change the same player.");
            } else {
              counter++;
              console.log(`${a}${b} - ${c}${d}`);
            }
             if (counter === 6) {
              break;
             }
          }
        }
        if (counter === 6) {
          break;
        }
}
      if (counter === 6) {
        break;
      }
    }
    if (counter === 6) {
        break; 
}
}
}
//substitute(["7", "6", "8", "5"])
substitute(["", "", "", ""])
