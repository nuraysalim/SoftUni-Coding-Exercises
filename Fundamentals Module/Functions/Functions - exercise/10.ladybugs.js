function ladybugs(commands) {
    let fieldSizeIndexes = commands.shift();
    let fieldArrPositions = [];
    for(let j = 0; j < fieldSizeIndexes; j++) {
        fieldArrPositions.push('')
    }
    let ladybugStartPosition = commands.shift().split(' ');
    for(let k = 0; k < ladybugStartPosition.length; k++){
        
    }
    console.log(ladybugStartPosition);

    for(let i = 0; i < commands.length; i++) {
      
        let [currIndex, direction, newIndex] = commands[i].split(' ')

        switch (direction) {
            case 'right':
                break;
            case 'left':
                break;
        }
    }
}
ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ])