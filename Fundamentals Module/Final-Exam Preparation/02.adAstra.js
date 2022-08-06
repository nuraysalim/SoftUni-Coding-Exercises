function adAstra(input) {
  let pattern =
    /([|#])[A-Za-z\s)]+\1[\d]{2,2}\/[\d]{2,2}\/[\d]{2,2}\1[\d]+\1/gm;
  let foodSupply = [];
  let match;
  let sumOfCalories = 0;

  while ((match = pattern.exec(input)) !== null) {
    let [line, separator] = match;
    line = line.split(separator);
    line.shift();
    line.pop();

    foodSupply.push(line);
    sumOfCalories += Number(line[2]);
  }

  const enoughForDays = Math.floor(sumOfCalories / 2000);

  console.log(`You have food to last you for: ${enoughForDays} days!`);

  for (const food of foodSupply) {
    console.log(
      `Item: ${food[0]}, Best before: ${food[1]}, Nutrition: ${food[2]}`
    );
  }
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
console.log("---------------------");
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
console.log("------------");
adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
