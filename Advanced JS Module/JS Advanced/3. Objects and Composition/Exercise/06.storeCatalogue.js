function storeCatalogue(arr) {
    let catalogue = {};

    for (const info of arr) {
        let [product, price] = info.split(' : ');
        catalogue[product] = price;
    }

    let sortedCatalogue = Object.keys(catalogue).sort();
    let groupLetter = sortedCatalogue[0][0];
    console.log(groupLetter);
    

    for (const key of sortedCatalogue) {
        if(groupLetter !== key[0]) {
            groupLetter = key[0];
            console.log(groupLetter);
        }

        console.log(`  ${key}: ${catalogue[key]}`);
    }

}
storeCatalogue(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'])