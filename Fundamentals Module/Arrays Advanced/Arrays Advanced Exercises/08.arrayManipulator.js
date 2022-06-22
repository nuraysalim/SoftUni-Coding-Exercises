function arrayManipulator(nums, commands) {
    for (let i = 0; i < commands.length; i++) {
        let currBlock = commands[i].split(' ');
        let currCommand = currBlock.shift();
        let currValues = currBlock.map(Number);


      switch (currCommand) {
        case 'add': nums.splice(currValues[0], 0, currValues[1]);
        break;
        case 'addMany': let index = currValues.shift();
        nums.splice(index, 0, ...currValues);
        break;
        case 'contains':
          console.log(nums.indexOf(currValues[0]));
          break;
        case 'remove':
          nums.splice(currValues, 1);
          break;
        case 'shift':
          for(let i = 0; i < currValues; i++) {
          let firstValueOfArr = nums.shift();
          nums.push(firstValueOfArr);
      }
          break;
        case 'sumPairs':

          let summedPairs = [];

          if(nums.length % 2 !== 0) {
            nums.push(0);
          } 

          for(let i = 0; i < nums.length; i += 2) {
            let firstNum = nums[i];
            let secondNum = nums[i+1];
            summedPairs.push(firstNum + secondNum);
          }
          nums = summedPairs;
          break;
        case 'print':
          console.log(`[ ${nums.join(', ')} ]`);
          break;
      }

      if(currCommand == 'print') {
        break;
      }
    }
}
// arrayManipulator(
//   [1, 2, 4, 5, 6, 7],
//   ["add 1 8", "contains 1", "contains 3", "print"]
// );
arrayManipulator([1, 1, 1, 1, 1],
  ['add 0 2', 'addMany 2 3 3 3', 'contains 4', 'remove 0', 'shift 2', 'print']
  )