function makeADictionary(arr) {
    let dictionary = {};

    for(let definition of arr) {
        let obj = JSON.parse(definition);
        let keysOfObj = Object.keys(obj)
        dictionary[keysOfObj] = Object.values(obj);
        
        if (dictionary.hasOwnProperty(Object.keys(definition))) {
            let changeDefinition = Object.keys(definition);
            dictionary.changeDefinition = Object.values(obj);
        }

        function sortArray(x, y) {
            let name = Object.keys(definition);
            let name2 = Object.keys(dictionary);

            if(x.name < y.name2) {
                return -1;
            }
            if (x.name > y.name2) {
                return 1;
            }
            return 0;
        }
        let s = dictionary.sort(sortArray)
        console.log(s);
    }

}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])