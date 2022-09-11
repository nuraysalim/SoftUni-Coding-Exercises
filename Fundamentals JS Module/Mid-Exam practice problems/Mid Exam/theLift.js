function theLift(input) {
  let peopleInQueue = Number(input.shift());
  let wagonState = input.shift().split(" ").map(Number);
  let index = wagonState.length;

  let isFullAndNoQueue = true;

  for (let i = 0; i < index; i++) {
    let currWagon = wagonState[i];

    while (currWagon !== 4) {
        currWagon++;
        peopleInQueue--;
        if(peopleInQueue === 0) {
            break;
        }
    }
    wagonState[i] = currWagon;
    if (peopleInQueue === 0) {
        break;
    }
  }

  let isFull = wagonState.filter(w => w !== 4);
 
    if (isFull.length === 0 && peopleInQueue === 0) {
        console.log(wagonState.join(' '));
    } else if (isFull.length !== 0) {
        console.log('The lift has empty spots!');
        console.log(wagonState.join(' '));
    } else {
        console.log(`There isn't enough space! ${peopleInQueue} people in a queue!`);
        console.log(wagonState.join(' '));
    }
}
theLift(["15", "0 0 0 0 0"]);
//theLift(["20", "0 2 0"])
