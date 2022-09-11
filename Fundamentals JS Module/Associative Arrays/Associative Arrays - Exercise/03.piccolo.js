function piccolo(data) {
  //We create a Set because car registration nums are supposed to be unique
  //and we need to store only one thing
  let parkingLot = new Set();

  //Then we need to check wherther the car is in or out and add it or remove it from the parking
  for (let carInfo of data) {
    let tokens = carInfo.split(", ");
    let inORout = tokens[0];
    let carNum = tokens[1];

    switch (inORout) {
      case "IN":
        parkingLot.add(carNum);
        break;
      case "OUT":
        parkingLot.delete(carNum);
        break;
    }
  }

  //Here we use return so if the parking lot is empty to not continue with the rest of the function
  if (parkingLot.size === 0) {
    return console.log(`Parking Lot is Empty`);
  }

  //We sort the left cars in the parking lot. 
  //We use only sort() because it compares them with their values from the ASCII table
  let sortedParking = Array.from(parkingLot).sort();

  console.log(sortedParking.join("\n"));
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
