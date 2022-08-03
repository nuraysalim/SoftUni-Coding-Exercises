function computerStore(input) {
  let index = 0;
  let pricesOrCustomer = input[index];
  index++;
  let costOfAllPartsWithTaxes = 0;
  let finalCostWithoutTaxes = 0;
  let taxes;

  while (pricesOrCustomer !== "special" && pricesOrCustomer !== "regular") {
    if (pricesOrCustomer < 0) {
      console.log("Invalid price!");
    } else {
      let priceOfAPartWithTaxes =
        Number(pricesOrCustomer) + Number(pricesOrCustomer) * 0.2;
      costOfAllPartsWithTaxes += priceOfAPartWithTaxes;
      finalCostWithoutTaxes += Number(pricesOrCustomer);
    }
    pricesOrCustomer = input[index];
    index++;
  }

  taxes = costOfAllPartsWithTaxes - finalCostWithoutTaxes;

  if (pricesOrCustomer == "special") {
    let discount = 0.9;
    costOfAllPartsWithTaxes *= 0.9;
  }

  if (costOfAllPartsWithTaxes === 0) {
    console.log("Invalid order!");
  } else {
    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${finalCostWithoutTaxes.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${costOfAllPartsWithTaxes.toFixed(2)}$`);
  }
}
computerStore(['1050', '200', '450', '2',
'18.5', '16.86', 'special']);
//computerStore(['regular'])
computerStore(["1023", "15", "-20",
  "-5.50", "450", "20", "17.66", "19.30", "regular",]);
