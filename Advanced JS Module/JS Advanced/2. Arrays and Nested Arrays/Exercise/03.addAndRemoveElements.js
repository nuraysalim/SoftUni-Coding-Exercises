function addAndRemoveEl(commands) {
    let element = 1;
    let arr = [];

    for(let command of commands) {
        
        switch (command) {
            case 'add':
                arr.push(element);
                break;
                
                case 'remove':
                    arr.pop();
                    break;
                }
        
        element++;
    }

    if(arr.length === 0) {
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }
}
addAndRemoveEl(['remove', 
'remove', 
'remove'])