function messagesManager(input) {
    let capacity = Number(input.shift());

    let people = {};

    for(let line of input) {
        if(line === 'Statistics') {
            break;
        }

    let [command, firstParam, secondParam, thirdParam] = line.split('=');
        
    switch (command) {
        case 'Add': if(!people.hasOwnProperty(firstParam)) {
            people[firstParam] = {};
            people[firstParam]['sent'] = Number(secondParam);
            people[firstParam]['received'] = Number(thirdParam);
        }
            break;
    
        case 'Message': if(people.hasOwnProperty(firstParam)
                            && people.hasOwnProperty(secondParam)) {
                                people[firstParam]['sent'] += 1;
                                people[secondParam]['received'] += 1;

                                let sendersMessages = people[firstParam]['sent'] + people[firstParam]['received']
                                let receiversMessages = people[secondParam]['sent'] + people[secondParam]['received']

                                if(sendersMessages >= capacity) {
                                    delete people[firstParam];
                                    console.log(`${firstParam} reached the capacity!`);
                                } 
                                 
                                if(receiversMessages >= capacity) {
                                    delete people[secondParam];
                                    console.log(`${secondParam} reached the capacity!`);
                                } 
            
                            }
            break;

        case 'Empty': 
        
        if(people.hasOwnProperty(firstParam)) {
         delete people[firstParam];
        } else if (firstParam === 'All') {
            people = {};
        }
            break;
    }
    }


    console.log(`Users count: ${Object.keys(people).length}`);

    for (const person in people) {
        let sumOfMessages = people[person]['sent'] + people[person]['received'];

        console.log(`${person} - ${sumOfMessages}`);
    }
}
messagesManager(["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"])
console.log('-------------');
messagesManager(["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"])
console.log('-------------');
messagesManager(["12",
"Add=Bonnie=3=5",
"Add=Johny=4=4",
"Empty=All",
"Add=Bonnie=3=3",
"Statistics"])