function juiceFlavors(arrayOfJuices) {
    let quantityOfJuice = {}
    let producedBottles = {};

    for(let juice of arrayOfJuices) {
        let [flavour, quantity] = juice.split(' => ');

        if(!quantityOfJuice.hasOwnProperty(flavour)) {
            quantityOfJuice[flavour] = 0;
        };

        quantityOfJuice[flavour] += Number(quantity);

        while(quantityOfJuice[flavour] >= 1000) {
            if(!producedBottles.hasOwnProperty(flavour)) {
                producedBottles[flavour] = 0;
            };
    
            producedBottles[flavour]++;

            quantityOfJuice[flavour] -= 1000;
        }
    }

    for (const key in producedBottles) {
        console.log(`${key} => ${producedBottles[key]}`);
    }
}
juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])