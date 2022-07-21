function modernTimesOfHashTag(string) {
  let stringToArr = string.split(" ");

  for (let word of stringToArr) {
    if (word.startsWith("#") && word.length > 1) {
      let flag = true;
      let wordToLower = word.toLowerCase();

      for (let i = 1; i < word.length; i++) {
        if (wordToLower.charCodeAt(i) < 97 || wordToLower.charCodeAt(i) > 122) {
          flag = false;
          break;
        }
      }

      if (flag) {
        console.log(word.slice(1));
      }
    }
  }
}
modernTimesOfHashTag(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
console.log("-------------------");
modernTimesOfHashTag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
