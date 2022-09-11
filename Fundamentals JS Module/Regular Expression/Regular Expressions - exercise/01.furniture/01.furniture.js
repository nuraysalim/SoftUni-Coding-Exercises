function furniture(input) {
  let pattern =
    />>(?<furniture>[A-Z][A-z]+)<<(?<price>[\d.]+)!(?<quantity>[\d]+)/g;
  let totalSum = 0;
  let receipt = input.join(" ");
  let furnituresArr = [];
  let match;

  while ((match = pattern.exec(receipt)) !== null) {

      let furniture = match.groups["furniture"];
      let price = Number(match.groups["price"]);
      let quantity = Number(match.groups["quantity"]);
      
      furnituresArr.push(furniture);
      totalSum += price * quantity;
  }

  console.log("Bought furniture:");

  furnituresArr.forEach(el => console.log(el));
  
  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
console.log('------------------');
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])
console.log('---------');
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase'])