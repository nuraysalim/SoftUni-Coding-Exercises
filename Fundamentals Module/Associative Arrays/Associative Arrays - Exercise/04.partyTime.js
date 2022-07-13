function partyTime(input) {
  let vipGuest = [];
  let regularGuest = [];
  let index = 0;
  let guest = input[index];

  while (guest !== "PARTY") {
    input.shift();

    if (!isNaN(guest[0])) {
      vipGuest.push(guest);
    } else {
      regularGuest.push(guest);
    }

    guest = input[index];
  }

  for (let i = 1; i < input.length; i++) {
    let person = input[i];
    let indexOfPerson;

    if(!isNaN(person[0])) {
        indexOfPerson = vipGuest.indexOf(person);
        vipGuest.splice(indexOfPerson, 1)
    } else {
        indexOfPerson = regularGuest.indexOf(person);
        regularGuest.splice(indexOfPerson, 1);
    }
      }

  let countOfGuests = vipGuest.length + regularGuest.length;

  console.log(countOfGuests);
  
  for (let guest of vipGuest) {
    console.log(guest);
  }
  for (let guest of regularGuest) {
    console.log(guest);
  }
}
partyTime(['NoBUajQ',
'4Ce8vwPmE',
'5SVQXQCbc',
'7IK9Yo0h',
'9NoBUajQ',
'4Ce8vwPmE',
'5SVQXQCbc',
'6tSzE5t0p',
'PARTY',
'9NoBUajQ',
'4Ce8vwPmE',
'5SVQXQCbc',
'6tSzE5t0p'
]);
