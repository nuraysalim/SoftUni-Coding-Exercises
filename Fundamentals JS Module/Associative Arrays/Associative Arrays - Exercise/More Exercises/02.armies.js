function armies(input) {
  let leaders = {};
  for (let line of input) {
    let tokens;
    let leaderName;
    let armyName;
    let armyCount;

    if (!line.includes("+") && !line.includes(":")) {
      tokens = line.split(" ");
      let command = tokens.pop();
      leaderName = tokens.join(" ");

      switch (command) {
        case "arrives":
          leaders[leaderName] = {};
          break;
        case "defeated":
          delete leaders[leaderName];
          break;
      }
    } else if (line.includes(":")) {
      tokens = line.split(": ");
      leaderName = tokens[0];

      if (leaders.hasOwnProperty(leaderName)) {
        let armyInfo = tokens[1].split(", ");
        armyName = armyInfo[0];
        armyCount = Number(armyInfo[1]);

        leaders[leaderName][armyName] = armyCount;
      }
    } else {
      tokens = line.split(" + ");
      armyName = tokens[0];
      armyCount = Number(tokens[1]);

      for (let [leaderName, armies] of Object.entries(leaders)) {
        if (armies.hasOwnProperty(armyName)) {
          let oldValue = armies[armyName];
          armies[armyName] = oldValue + armyCount;
        }
      }
    }
  }

  let totalArmyCount = {};

  for (let [leaderName, armyPool] of Object.entries(leaders)) {
    let sumOfArmies = 0;

    for (let armyCount of Object.values(armyPool)) {
      sumOfArmies += armyCount;
    }
    totalArmyCount[leaderName] = sumOfArmies;
  }

  let sortedByTotalArmy = Object.entries(totalArmyCount).sort((a, b) => {
    let valueA = a[1];
    let valueB = b[1];
    return valueB - valueA;
  });

  for (let [leaderName, totalArmy] of sortedByTotalArmy) {
    console.log(`${leaderName}: ${totalArmy}`);
    let sortedByArmy = Object.entries(leaders[leaderName]).sort((a, b) => {
      let countA = a[1];
      let countB = b[1];
      return countB - countA;
    });
    for (let [armyName, armyCount] of sortedByArmy) {
      console.log(`>>> ${armyName} - ${armyCount}`);
    }
  }
}
armies([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
console.log("-------------------------");
armies([
  "Rick Burr arrives",
  "Findlay arrives",
  "Rick Burr: Juard, 1500",
  "Wexamp arrives",
  "Findlay: Wexamp, 34540",
  "Wexamp + 340",
  "Wexamp: Britox, 1155",
  "Wexamp: Juard, 43423",
]);
