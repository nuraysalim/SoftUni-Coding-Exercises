function companyUsers(input) {
  let company = new Map();

  for (const line of input) {
    let tokens = line.split(" -> ");
    let nameOfCompany = tokens[0];
    let employeeID = tokens[1];

    if (!company.has(nameOfCompany)) {
      company.set(nameOfCompany, new Set());
    }
    company.get(nameOfCompany).add(employeeID);
  }

  let sortedCompany = Array.from(company.keys()).sort();

  for (const key of sortedCompany) {
    console.log(key);
    let values = company.get(key).values();
    for (let id of values) {
      console.log(`-- ${id}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
