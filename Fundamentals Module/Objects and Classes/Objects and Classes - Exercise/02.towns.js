function towns(input) {
  for (let row of input) {
   let obj = {};
   let rowIntoArr = row.split(' | ');

   obj.town = rowIntoArr[0];
   obj.latitude = Number(rowIntoArr[1]).toFixed(2);
   obj.longitude = Number(rowIntoArr[2]).toFixed(2);

    console.log(obj);
  }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])