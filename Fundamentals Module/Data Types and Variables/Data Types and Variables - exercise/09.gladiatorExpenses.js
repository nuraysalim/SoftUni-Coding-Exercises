function gladiatorExpenses(
  countOfDefeats,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let trashedHelmet = 0;
  let trashedSword = 0;
  let trashedShield = 0;
  let trashedArmor = 0;

  for (let i = 1; i <= countOfDefeats; i++) {
    if (i % 2 === 0) {
      trashedHelmet++;
    }

    if (i % 3 === 0) {
      trashedSword++;
    }

    if (i % 2 === 0 && i % 3 === 0) {
      trashedShield++;
      if (trashedShield != 0 && trashedShield % 2 == 0) {
        trashedArmor++;
      }
    }
    }


  let helmetCost = trashedHelmet * helmetPrice;
  let swordCost = trashedSword * swordPrice;
  let shieldCost = trashedShield * shieldPrice;
  let armorCost = trashedArmor * armorPrice;

  const expenses = helmetCost + swordCost + shieldCost + armorCost;

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
