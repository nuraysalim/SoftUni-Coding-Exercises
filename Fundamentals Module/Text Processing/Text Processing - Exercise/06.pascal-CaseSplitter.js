function pascalCaseSplitter(input) {
  let inputToArr = input.split("");
  let res = [];
  let word = inputToArr.shift();

  for (let i = 0; i < inputToArr.length; i++) {
    let letter = inputToArr[i];

    if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
      res.push(word);
      word = letter;
      continue;
    }
    
    word += letter;
  }

  res.push(word);

  console.log(res.join(", "));
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
