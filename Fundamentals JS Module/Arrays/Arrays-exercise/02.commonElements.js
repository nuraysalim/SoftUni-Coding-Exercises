function commonElements(arr1, arr2) {
  let index = arr1.length;

  for (let i = 0; i < index; i++) {
    let firstEl = arr1[i];
    if (arr2.includes(firstEl)) {
      console.log(firstEl);
    }
  }
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
