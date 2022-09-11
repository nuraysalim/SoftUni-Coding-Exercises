function destinationMapper(input) {
  let pattern = /(=|\/)(?<destination>[A-Z][a-zA-Z]{2,})\1/gm;
  let match;
  let destinations = [];
  let points = 0;

  while ((match = pattern.exec(input)) !== null) {
    destinations.push(match.groups["destination"]);
    points += match.groups["destination"].length;
  }

  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log("---------");
destinationMapper("ThisIs some InvalidInput");
