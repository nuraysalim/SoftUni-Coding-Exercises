function fancyBarcodes(input) {
  let countOfBarCodes = Number(input.shift());
  let patternForBarCode = /@[#]+[A-Z][A-Za-z0-9]{4,}[A-Z]@[#]+/g;
  let productGroupRegex = /\d/g;

  for (let index = 0; index < countOfBarCodes; index++) {
    let line = input[index];
    let matched = line.match(patternForBarCode);

    if (matched === null) {
      console.log("Invalid barcode");
      continue;
    }

    matched = matched.join("");

    let productGroup = matched.match(productGroupRegex);

    if (!productGroup) {
      productGroup = "00";
    } else {
      productGroup = productGroup.join("");
    }

    console.log(`Product group: ${productGroup}`);
  }
}
fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
console.log("----------------");
fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
