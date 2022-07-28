function softUniBarIncome(input) {
  let allPurchases = input.join(", ");
  let pattern =
    /\%(?<customer>[A-Z][a-z]+)\%[^|$%.]*\<(?<product>\w+)\>[^|$%.0-9]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>\d+[\.\d+]*)?\$/gm;
  let match;
  let income = 0;

  while ((match = pattern.exec(allPurchases)) !== null) {
    
    let customer = match.groups["customer"];
    let product = match.groups["product"];
    let totalPrice =
      Number(match.groups["quantity"]) * Number(match.groups["price"]);

    console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);

    income += totalPrice;
  }

  console.log(`Total income: ${income.toFixed(2)}`);
}
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
console.log("----------------");
softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
