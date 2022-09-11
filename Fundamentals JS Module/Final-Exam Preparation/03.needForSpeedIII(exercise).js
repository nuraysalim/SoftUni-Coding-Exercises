function needForSpeedThree(input) {
  const numOfCars = Number(input.shift());
  let cars = {};
  for (let i = 0; i < numOfCars; i++) {
    let [car, mileage, fuel] = input.shift().split("|");
    cars[car] = {};
    cars[car]["mileage"] = Number(mileage);
    cars[car]["fuel"] = Number(fuel);
  }

  let index = 0;
  let line = input[index];
  index++;

  while (line !== "Stop") {
    let [command, car, thirdParam, fourthParam] = line.split(" : ");

    switch (command) {
      case "Drive":
        if (cars[car]["fuel"] < fourthParam) {
          console.log("Not enough fuel to make that ride");
        } else {
          cars[car]["mileage"] += Number(thirdParam);
          cars[car]["fuel"] -= Number(fourthParam);
          console.log(
            `${car} driven for ${thirdParam} kilometers. ${fourthParam} liters of fuel consumed.`
          );
        }
        if (cars[car]["mileage"] >= 100000) {
          console.log(`Time to sell the ${car}!`);
          delete cars[car];
        }

        break;

      case "Refuel":
        let capacity = cars[car]["fuel"] + Number(thirdParam);
        if (capacity < 75) {
          cars[car]["fuel"] = capacity;
        } else {
            thirdParam = 75 - (cars[car]["fuel"]);
          cars[car]["fuel"] = 75;
        }

        console.log(`${car} refueled with ${thirdParam} liters`);
        break;

      case "Revert":
        cars[car]["mileage"] -= Number(thirdParam);

        if (cars[car]["mileage"] < 10000) {
          cars[car]["mileage"] = 10000;
        } else {
          console.log(`${car} mileage decreased by ${thirdParam} kilometers`);
        }

        break;
    }

    line = input[index];
    index++;
  }

  for (const carName in cars) {
    console.log(
      `${carName} -> Mileage: ${cars[carName]["mileage"]} kms, Fuel in the tank: ${cars[carName]["fuel"]} lt.`
    );
  }
}
// needForSpeedThree([
//   "3",
//   "Audi A6|38000|62",
//   "Mercedes CLS|11000|35",
//   "Volkswagen Passat CC|45678|5",
//   "Drive : Audi A6 : 543 : 47",
//   "Drive : Mercedes CLS : 94 : 11",
//   "Drive : Volkswagen Passat CC : 69 : 8",
//   "Refuel : Audi A6 : 50",
//   "Revert : Mercedes CLS : 500",
//   "Revert : Audi A6 : 30000",
//   "Stop",
// ]);
console.log("-------------");
needForSpeedThree([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
