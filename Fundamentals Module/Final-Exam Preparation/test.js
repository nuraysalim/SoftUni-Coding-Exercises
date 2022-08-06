function theImitationGame(input) {
 let message = input.shift();
    let index = 0;
    let line = input[index];
    index++;

    while(line !== 'Decode') {
        let [command, firstParam, secondParam] = line.split('|');
        let firstHalf;
        let secondHalf;

        switch(command) {
            case 'Move': 
             firstHalf =  message.slice(0, Number(firstParam));
             secondHalf = message.slice(Number(firstParam),);

            message = secondHalf + firstHalf;
                break;
            case 'Insert': 
            firstHalf =  message.slice(0, Number(firstParam));
            secondHalf = message.slice(Number(firstParam),);

            message = firstHalf + secondParam + secondHalf;
                break;
            case 'ChangeAll':
                message = message.replace(new RegExp(firstParam, 'g'), secondParam);
                break;
        }

        line = input[index];
        index++;
    }

    console.log(`The decrypted message is: ${message}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ])
//   console.log('------------');
//   theImitationGame([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode',
//   ])