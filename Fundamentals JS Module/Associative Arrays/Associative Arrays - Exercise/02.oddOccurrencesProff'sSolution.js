function oddOccurrences(input) {
  let res = new Map();

  let arrayOfWords = input.split(" ");

  for (let word of arrayOfWords) {
    word = word.toLowerCase();

    if (!res.has(word)) {
      res.set(word, 0);
    }

    let oldValue = res.get(word);
    res.set(word, oldValue + 1);
  }

  let filterRes = Array.from(res).filter(([key, value]) => {
    return value % 2 !== 0;
  });

  let buff = "";

  for (let [key, value] of filterRes) {
    buff += key + " ";
  }

  console.log(buff);
}
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food food food food food");
