function worldTour(input) {
    let allStops = input.shift();
    let index = 0;
    let line = input[index];
    index++;
    let  validIndexes = allStops.length;
    
    
    while(line !== "Travel") {
        let [command, firstParam, secondParam] = line.split(':');
        let partOne;
        let partTwo; 

        switch (command) {
            case 'Add Stop':
                let i = Number(firstParam);

                if(i >= 0 && i < validIndexes){
                let string = secondParam;
                 partOne = allStops.slice(0, i);
                 partTwo = allStops.slice(i);
                allStops = partOne + string + partTwo;
                }
                break;
        
            case 'Remove Stop':
                if(!allStops[firstParam] || !allStops[secondParam]) {
                    break;
                }
                let subStr = allStops.substring(Number(firstParam), Number(secondParam) + 1);
                
                allStops = allStops.replace(subStr, "");
                break;
            
            case 'Switch':
                if (allStops.includes(firstParam)) {
                    let searchOldStr = new RegExp(firstParam, 'g');

                    allStops = allStops.replace(searchOldStr, secondParam);
                }
                break;
        }

        console.log(allStops);

    line = input[index];
    index++;
}

console.log(`Ready for world tour! Planned stops: ${allStops}`);

}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])