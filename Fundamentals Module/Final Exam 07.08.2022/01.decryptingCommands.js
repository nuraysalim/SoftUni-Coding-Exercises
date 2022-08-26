function decryptingCommands(input) {
    let string = input.shift();
    let index = 0;
    let line = input[index];
    index++;
    while(line !== 'Finish') {
        let [command, firstParam, secondParam] = line.split(' ');
        
        
        switch (command) {
            case 'Replace':
                string = string.replace(new RegExp(firstParam, 'g'), secondParam);
                console.log(string);
                break;

            case 'Cut': 
            if(string[firstParam] == undefined || string[secondParam] == undefined) {
                console.log("Invalid indices!");
            } else {
                let removedPart = string.slice(firstParam, Number(secondParam) + 1);
                 string = string.replace(removedPart, "");
                 console.log(string);
            }
                break;

            case 'Make':

                if(firstParam === 'Upper') {
                    string = string.toUpperCase();
                } else {
                    string = string.toLowerCase();
                }

                console.log(string);
                break;

            case 'Check':
                if(string.includes(firstParam)) {
                    console.log(`Message contains ${firstParam}`);
                } else {
                    console.log(`Message doesn't contain ${firstParam}`);
                }
                break;

            case 'Sum':  if(string[firstParam] == undefined || string[secondParam] == undefined) {
                console.log("Invalid indices!");
            } else {
                let slicedPart = string.slice(firstParam, Number(secondParam) + 1);
                let sum = 0;
                for (const letter of slicedPart) {
                    let valueOfLetter = letter.charCodeAt();
                    sum += valueOfLetter;
                }

                console.log(sum);
            }
                break;

        }

        line = input[index];
        index++;
    }
}
decryptingCommands(["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"])
console.log('-----------------');
decryptingCommands(["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 23",
"Sum -2 2",
"Finish"])