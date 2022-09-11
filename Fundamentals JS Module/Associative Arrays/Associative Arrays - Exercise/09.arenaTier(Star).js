function arenaTier(input) {
  let index = 0;
  let line = input[index];
  index++;
  let allGladiators = {};

  while (line !== "Ave Cesar") {
    let tokens;

    if (line.includes("->")) {
      tokens = line.split(" -> ");
      let name = tokens[0];
      let technique = tokens[1];
      let skill = Number(tokens[2]);

      if (!allGladiators.hasOwnProperty(name)) {
        allGladiators[name] = {};
      }
      if (!allGladiators[name].hasOwnProperty(technique)) {
        allGladiators[name][technique] = 0;
      }

      if (allGladiators[name][technique] < skill) {
        allGladiators[name][technique] = skill;
      }
    } else {
      tokens = line.split(" vs ");
      let fighterOne = tokens[0];
      let fighterTwo = tokens[1];

      if (
        allGladiators.hasOwnProperty(fighterOne) &&
        allGladiators.hasOwnProperty(fighterTwo)
      ) {
        let sumOfGladiatorOne = 0;
        let sumOfGladiatorTwo = 0;

        for (let [technique, skill] of Object.entries(
          allGladiators[fighterOne]
        )) {
          if (allGladiators[fighterTwo].hasOwnProperty(technique)) {
            sumOfGladiatorOne += allGladiators[fighterOne][technique];
            sumOfGladiatorTwo += allGladiators[fighterTwo][technique];
          }
        }

        if (sumOfGladiatorOne > sumOfGladiatorTwo) {
          delete allGladiators[fighterTwo];
        } else if (sumOfGladiatorOne < sumOfGladiatorTwo) {
          delete allGladiators[fighterOne];
        }
      }
    }
    line = input[index];
    index++;
  }

  let gladiatorTotalSkill = {};
  for (let [gladiatorName, techniquePool] of Object.entries(allGladiators)) {
    if (!gladiatorTotalSkill.hasOwnProperty(gladiatorName)) {
      gladiatorTotalSkill[gladiatorName] = 0;
    }
    let sum = 0;

    for (let currentSkill of Object.values(techniquePool)) {
      sum += currentSkill;
    }
    gladiatorTotalSkill[gladiatorName] = sum;
  }

  let sortedByTotalSkill = Object.entries(gladiatorTotalSkill).sort(
    ([keyA, valueA], [keyB, valueB]) => {
      return valueB - valueA || keyA.localeCompare(keyB);
    }
  );

  for (let [gladiator, totalSkill] of sortedByTotalSkill) {
    let sortedTechSkill = Object.entries(allGladiators[gladiator]).sort(
      ([keyA, valueA], [keyB, valueB]) => {
        return valueB - valueA || keyA.localeCompare(keyB);
      }
    );
    console.log(`${gladiator}: ${totalSkill} skill`);
    for (let [technique, skill] of sortedTechSkill) {
      console.log(`- ${technique} <!> ${skill}`);
    }
  }
}
arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
console.log("==========================");
arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
