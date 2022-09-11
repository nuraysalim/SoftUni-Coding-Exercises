function hardWord(input) {
  let message = input[0];
  let helpWords = input[1];
  let underscores = [];

  for (let el of helpWords) {
    let underscore = "_";
    underscore = underscore.repeat(el.length);
    underscores.push(underscore);
  }
  helpWords.sort((a, b) => b.length - a.length);
  underscores.sort((a, b) => b.length - a.length);

  for (let i = 0; i < underscores.length; i++) {
    message = message.replace(underscores[i], helpWords[i]);
  }
  console.log(message);
}
hardWord([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
