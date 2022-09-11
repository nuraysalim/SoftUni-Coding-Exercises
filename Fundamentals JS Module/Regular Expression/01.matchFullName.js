function matchingName(names) {
  let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g;
  let validNames = [];
  let currName = pattern.exec(names);

  while (currName !== null) {
    validNames.push(currName[0]);

    currName = pattern.exec(names);
  }

  console.log(validNames.join(" "));
}
matchingName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
