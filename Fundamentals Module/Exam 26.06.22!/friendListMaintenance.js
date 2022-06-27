function friendListMaintenance(input) {
    let usernames = input.shift().split(", ");
    let index = 0;
    let command = input[index];
    index++;
    let blackListedCounter = 0;
    let lostNamesCounter = 0


    while (command !== 'Report') {
        let curr = command.split(' ');

        switch (curr.shift()) {
            case 'Blacklist':
                if(usernames.includes(curr.join())) {
                blackListedCounter++;
                usernames.splice(usernames.indexOf(curr.join()), 1, 'Blacklisted');
                console.log(`${curr} was blacklisted.`);
                } else {
                    console.log(`${curr} was not found.`);
                }
                break;
            case 'Error':  
            if(usernames[curr] != undefined && usernames[curr] !== 'Blacklisted'
            && usernames[curr] !== 'Lost') {
                lostNamesCounter++;
                let name = usernames[curr];
                console.log(`${name} was lost due to an error.`);
                usernames.splice(usernames.indexOf(usernames[curr]), 1, 'Lost');
            }
                break;
            case 'Change':
                let indexOfName = curr.shift();
                if(usernames[indexOfName] != undefined) {
                    console.log(`${usernames[indexOfName]} changed his username to ${curr.join()}.`);
                    usernames.splice(indexOfName, 1, curr.join());
                }
                break;
        }

       command = input[index];
        index++;
    }

    console.log(`Blacklisted names: ${blackListedCounter}`);
    console.log(`Lost names: ${lostNamesCounter}`);
    console.log(usernames.join(' '));
    
}
friendListMaintenance(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])


