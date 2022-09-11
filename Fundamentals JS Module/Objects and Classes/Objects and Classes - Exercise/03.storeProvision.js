function storeProvision(currStock, orderedStock) {
  let storeProducts = {};
  let currentL = currStock.length;
  let orderedL = orderedStock.length;

  for (let i = 0; i < currentL; i += 2) {
    let product = currStock[i];
    let quantity = Number(currStock[i + 1]);

    storeProducts[product] = quantity;
  }

  for(let j = 0; j < orderedL; j += 2) {
    let product = orderedStock[j];
    if (!storeProducts.hasOwnProperty(product)) {
      storeProducts[product] = 0;
    } 
      storeProducts[product] += Number(orderedStock[j+1])
   }

   for (const key in storeProducts) {
      console.log(`${key} -> ${storeProducts[key]}`);
   }  

}
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
