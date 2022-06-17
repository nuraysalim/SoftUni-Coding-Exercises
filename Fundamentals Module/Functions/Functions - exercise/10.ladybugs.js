function ladybugs(commands) {
    let fieldSizeIndexes = commands.shift();
    let fieldArrPositions = [];
    for(let j = 0; j < fieldSizeIndexes; j++) {
        fieldArrPositions.push('')
    }
    let ladybugPosition = commands.shift().split(' ');
    //  console.log(ladybugStartPosition);
    //console.log(fieldArrPositions);
    
    for(let i = 0; i < commands.length; i++) {

        for(let k = 0; k < ladybugPosition.length; k++){
            let index = ladybugPosition[k];
            fieldArrPositions[index] = 'occupied';
        }
      
        let [currIndex, direction, newIndex] = commands[i].split(' ');

        for(let el of fieldArrPositions){
            let changeOfPosition;
            if (currIndex == 0) {
                changeOfPosition = fieldArrPositions.shift();
                fieldArrPositions.unshift('');
            } else {
                fieldArrPositions.slice(currIndex, currIndex + 1);
                
                
            }
        }

        switch (direction) {
            case 'right': 
                break;
            case 'left':
                break;
        }
    }
}
ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ])