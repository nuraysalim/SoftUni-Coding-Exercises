function replaceRepeatingChars(input) {
  let letters = input.split("");
  let res = [];
  let previousLetter;

  for (let letter of letters) {
    if (previousLetter === letter) {
      continue;
    }
    res.push(letter);
    previousLetter = letter;
  }

  console.log(res.join(""));
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
console.log("------------");
replaceRepeatingChars("qqqwerqwecccwd");
