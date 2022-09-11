function race(input) {
    let nameMap = new Map();
    let names = input.shift().split(', ');

    names.forEach(person => {
        nameMap.set(person, 0);
    });

    let patternForName = /[A-Za-z]+/g;
    let patterForDistance = /\d/g;

    for (let index = 0; index < input.length; index++) {
        
        let currLine = input[index];

        if(currLine == 'end of race') {
            break;
        }
        
        let nameMatch = currLine.match(patternForName).join('');
        let distanceMatch = (currLine.match(patterForDistance)).reduce((a, b) => {
      return Number(a) + Number(b)
        })

        if(nameMap.has(nameMatch)) {

            let previousValue = nameMap.get(nameMatch);
            previousValue += distanceMatch;

            nameMap.set(nameMatch, previousValue);
        }
    }

    let sortedByDistance = Array.from(nameMap).sort(
        ([keyA, valueA], [keyB, valueB]) => {
          return valueB - valueA;
        }
      );
    
    console.log(`1st place: ${sortedByDistance[0][0]}`);
    console.log(`2nd place: ${sortedByDistance[1][0]}`);
    console.log(`3rd place: ${sortedByDistance[2][0]}`);
}
race([
    "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
    "Mi*&5^6%$58c5ho!#$%#nne) ",
    "%$$B(*&&)i89ll)*&) ",
    "end of race",
    "R**(on%^&ald992) ",
    "T(*^^%immy77) ",
    "Ma123**$#g7g87i0e",
  ]);