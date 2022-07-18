function aminerTask(input) {
  let res = new Map();

  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let quantity = Number(input[i + 1]);

    if (!res.has(resource)) {
      res.set(resource, quantity);
    } else {
      let newQuantity = res.get(resource) + Number(quantity);
      res.set(resource, newQuantity);
    }
  }

  for (let [key, value] of res) {
    console.log(`${key} -> ${value}`);
  }
}
aminerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
