function legendaryFarming(input) {
  let arrOfInput = input.toLowerCase().split(" ");
  let index = arrOfInput.length;
  let keyMaterials = {
    shards: 0,
    fragments: 0,
    motes: 0,
  };
  let junk = {};
  let oldQuantity;
  let raceIsWon = false;

  for (let i = 0; i < index; i += 2) {
    let quantity = arrOfInput[i];
    let material = arrOfInput[i + 1];

    if (
      material == "shards" ||
      material == "fragments" ||
      material == "motes"
    ) {
      oldQuantity = keyMaterials[material];
      keyMaterials[material] = Number(quantity) + oldQuantity;
    } else {
      if (!junk.hasOwnProperty(material)) {
        junk[material] = 0;
      }
      oldQuantity = junk[material];
      junk[material] = Number(quantity) + oldQuantity;
    }

    for (const key in keyMaterials) {
      if (keyMaterials[key] >= 250) {
        oldQuantity = keyMaterials[key];
        keyMaterials[key] = oldQuantity - 250;
        raceIsWon = true;
        switch (key) {
          case "shards":
            console.log("Shadowmourne obtained!");
            break;
          case "fragments":
            console.log("Valanyr obtained!");
            break;
          case "motes":
            console.log("Dragonwrath obtained!");
            break;
        }
      }
    }

    if (raceIsWon) {
      break;
    }
  }

  let sortedKeyMat = Object.entries(keyMaterials).sort(
    ([keyA, valueA], [keyB, valueB]) => {
      return valueB - valueA || keyA.localeCompare(keyB);
    }
  );
  for (let [material, quantity] of sortedKeyMat) {
    console.log(`${material}: ${quantity}`);
  }

  let sortedJunk = Object.keys(junk).sort((keyA, keyB) => {
    return keyA.localeCompare(keyB);
  });

  for (const key of sortedJunk) {
    console.log(`${key}: ${junk[key]}`);
  }
}
legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
console.log("----------------------");
legendaryFarming(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
