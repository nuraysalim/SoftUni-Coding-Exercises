function searchForANumber(arr1, arr2) {
  let numOfElTake = arr2[0];
  let numOfElDelete = arr2[1];
  let searchingThisNum = arr2[2];
  let targetNumCounter = 0;

  let takenElFromArr1 = arr1.slice(0, numOfElTake);
  takenElFromArr1.splice(0, numOfElDelete);

  while (takenElFromArr1.includes(searchingThisNum)) {
    targetNumCounter++;
    takenElFromArr1.splice(takenElFromArr1.indexOf(searchingThisNum), 1);
  }
  console.log(`Number ${searchingThisNum} occurs ${targetNumCounter} times.`);
}
searchForANumber([5, 1, 5, 5, 8, 2, 7], [3, 1, 5]);
