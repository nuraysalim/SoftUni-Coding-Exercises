function cutAndReverse(string) {
  let buff = [];
  for (let letter of string) {
    buff.unshift(letter);
  }
  let reversedString = buff.join("");

  let index = reversedString.length / 2;
  let firstHalf = reversedString.substring(0, index);
  let secondHalf = reversedString.substring(index);

  console.log(secondHalf);
  console.log(firstHalf);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
console.log("-----------------");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
