function dungeonestDark(arrString) {
  let stringToArr = String(arrString).split('|');
  let index = stringToArr.length;
  let health = 100;
  let coins = 0;

  for (let i = 0; i < index; i++) {
    let room = stringToArr[i];
  if (room.includes("potion")) {
      if (health < 100) {
        let healingNum = Number(room.slice(7));
        health += healingNum;
        if (health > 100) {
          healingNum = 100 - (health - healingNum);
          health = 100;
        }
        console.log(`You healed for ${healingNum} hp.`);
        console.log(`Current health: ${health} hp.`);
      }
    } else if (room.includes("chest")) {
      let coinsNum = Number(room.slice(6));
      coins += coinsNum;
      console.log(`You found ${coinsNum} coins.`);
    } else {
      let nameAndDamg = room.split(' ');
      let monsterName = nameAndDamg[0];
      let damage = Number(nameAndDamg[1]);
      health -= damage;
      if (health > 0) {
        console.log(`You slayed ${monsterName}.`);
      } else {
        console.log(`You died! Killed by ${monsterName}.`);
        console.log(`Best room: ${i + 1}`);
        break;
      }
    }
  }

  if (health > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
dungeonestDark("rat 1|bat 200|potion 10")
dungeonestDark("|rat 10|chest 100|boss 70|chest 1000")
dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
