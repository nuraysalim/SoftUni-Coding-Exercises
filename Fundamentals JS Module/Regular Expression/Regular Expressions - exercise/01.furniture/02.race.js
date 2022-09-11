function race(input) {
  let racers = input.shift().split(', ');
  let patternForName = /[A-Za-z]+/g;
  let patterForDistance = /\d/g;
  let valid = patternForName.exec(input);
  let name = valid[0];
  let distance = 0;
  let index = 0;
  let mapOfParticipants = new Map();

  racers.forEach(name => {
    mapOfParticipants.set(name, 0)
  })

  while ((input[index]) !== 'end of race') {
    let letters = patternForName.exec(input);

    if ((letters[0] >= "A" && letters[0] <= "Z") || letters == "end") {

      if (racers.includes(name)) {

      let digitMatch = (input[index]).match(patterForDistance);
      digitMatch.forEach(digit => {
        distance += Number(digit);
      });

          let oldDistance = mapOfParticipants.get(name);
          let newDistance = Number(oldDistance) + Number(distance);
          mapOfParticipants.set(name, newDistance);
  
      }

      name = letters;
      distance = 0;
      index++;

    } else {
      name += letters;
    }
  }

  let sortedByDistance = Array.from(mapOfParticipants).sort(
    ([keyA, valueA], [keyB, valueB]) => {
      return valueB - valueA;
    }
  );

  let topThree = sortedByDistance.slice(0, 3);

    console.log(`1st place: ${topThree[0][0]}`);
    console.log(`2nd place: ${topThree[1][0]}`);
    console.log(`3rd place: ${topThree[2][0]}`);
}
// 80/100 - I am not sure why. Maybe it's because of the exec method 
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])
console.log("---------------");
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
);
