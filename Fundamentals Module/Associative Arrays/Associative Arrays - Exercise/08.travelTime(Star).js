function travelTime(input) {
  let destination = {};

  for (let line of input) {
    let tokens = line.split(" > ");
    let country = tokens[0];
    let town = tokens[1];
    let price = tokens[2];

    if (!destination.hasOwnProperty(country)) {
      destination[country] = {};
    }

    if (!destination[country].hasOwnProperty(town)) {
      destination[country][town] = price;
    } else {
      let previousPrice = destination[country][town];
      let currPrice = price;

      if (currPrice < previousPrice) {
        destination[country][town] = currPrice;
      }
    }
  }

  let sortedByCountry = Object.entries(destination).sort(
    ([keyA, valueA], [keyB, valueB]) => {
      return keyA.localeCompare(keyB);
    }
  );

  for (let [key, townInfo] of sortedByCountry) {
    let sortedByPrice = Object.entries(townInfo).sort(
      ([townA, priceA], [townB, priceB]) => {
        return priceA - priceB;
      }
    );
    let buff = `${key} -> `;
    for (let [townName, townPrice] of sortedByPrice) {
      buff += `${townName} -> ${townPrice} `;
    }
    console.log(buff);
  }
}
travelTime([
  "Bulgaria > Sofia > 800",
  "Bulgaria > Sopot > 200",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 500",
]);
