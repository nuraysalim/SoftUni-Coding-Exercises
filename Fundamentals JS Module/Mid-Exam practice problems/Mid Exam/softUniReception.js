function softUniReception(input) {
  let inputToNum = input.map(Number);
  let sumOfAllEmployees = inputToNum[0] + inputToNum[1] + inputToNum[2];
  let students = input[3];
  let hourCounter = 0;

  while (students > 0) {
    hourCounter++;

    if (hourCounter % 4 === 0) {
      continue;
    }
    students -= sumOfAllEmployees;
  }

  console.log(`Time needed: ${hourCounter}h.`);
}
//softUniReception(['5','6','4','20'])
softUniReception(["1", "2", "3", "45"]);
