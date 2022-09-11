function arrayModifier(input) {
    let arr = input.shift().split(' ');
    let index = 0;
    let command = input[index];
    index++;

    while(command !== 'end') {
        let currCommand = command.split(' ');
        
        switch(currCommand[0]) {
            case 'swap':
                let tempValue = arr[currCommand[1]];
                arr[currCommand[1]] = arr[currCommand[2]];
                arr[currCommand[2]] = tempValue;
                break;
            case 'multiply':
                arr[currCommand[1]] = arr[currCommand[1]] * arr[currCommand[2]]; 
                break;
            case 'decrease':
                for(let i = 0; i < arr.length; i++) {
                   arr[i] -= 1;
                }
                break;
        }

        command = input[index];
        index++;
    }

    console.log(arr.join(', '));
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",]);