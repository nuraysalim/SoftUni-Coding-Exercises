function cardGame(input) {
    let cardsOfPerson = {};
    let enumCardPower = {
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    };
  
    let enumCardType = {
        S: 4,
        H: 3,
        D: 2,
        C: 1,
    };
    
    for (const line of input) {
    let tokens = line.split(": ");
    let person = tokens[0];
    let deck = tokens[1].split(", ");

    if (!cardsOfPerson.hasOwnProperty(person)) {
      cardsOfPerson[person] = deck;
    } else {
      let newDeck = cardsOfPerson[person];
      newDeck.push(...deck);
      cardsOfPerson[person] = newDeck;
    }
}


for (const key in cardsOfPerson) {
    let sortedDeck = new Set();
    
    for (let card of cardsOfPerson[key]) {
        sortedDeck.add(card);
    }
    
    let points = 0;
    
    for (const card of sortedDeck) {
        let cardInfo = card.split("");
        let type = cardInfo.pop();
        let power = cardInfo.join("");
        
        if (isNaN(power)) {
            power = enumCardPower[power];
        }
        if (isNaN(type)) {
            type = enumCardType[type];
        }
        points += Number(power) * Number(type);
    }

    console.log(`${key}: ${points}`);
  }
}
cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
