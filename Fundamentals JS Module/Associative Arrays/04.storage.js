function storage(input) {
  let myMap = new Map();

  for (let line of input) {
    let product = line.split(" ");

    if (!myMap.has(product[0])) {
      myMap.set(product[0], Number(product[1]));
    } else {
      let oldQuantity = myMap.get(product[0]);
      myMap.set(product[0], oldQuantity + Number(product[1]));
    }
  }

  let keys = Array.from(myMap.keys());

  for (let key of keys) {
    console.log(`${key} -> ${myMap.get(key)}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
