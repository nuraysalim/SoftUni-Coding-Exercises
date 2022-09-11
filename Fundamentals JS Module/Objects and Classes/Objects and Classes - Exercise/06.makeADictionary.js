function makeADictionary(input) {
  let obj = {};

  for (const line of input) {
    let tokens = JSON.parse(line);

    for (const key in tokens) {
      obj[key] = tokens[key];
    }
  }

  let entriesOfObj = Object.entries(obj);
  let sortedAlphabetically = entriesOfObj.sort((a, b) => {
    (keyA = a[0]), (keyB = b[0]);
    return keyA.localeCompare(keyB);
  });

  for (let definition of sortedAlphabetically) {
    console.log(`Term: ${definition[0]} => Definition: ${definition[1]}`);
  }
}
makeADictionary([
  '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
  '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
  '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
  '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
  '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ',
]);
