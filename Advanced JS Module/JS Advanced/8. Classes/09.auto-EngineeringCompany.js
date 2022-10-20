function producedCars(arrOfStr) {
    let carStorage = new Map();

    for (const carInfo of arrOfStr) {
        let [brand, model, quantity] = carInfo.split(' | ');

        if(!carStorage.has(brand)){
            carStorage.set(brand, {});
        };

        if(!carStorage.get(brand).hasOwnProperty(model)) {
            carStorage.get(brand)[model] = 0;
        };

        carStorage.get(brand)[model] += Number(quantity);
    }

    
    for (const [brand, models] of carStorage.entries()) {
        console.log(brand);

        for (const model in models) {
           console.log(`###${model} -> ${models[model]}`);
        }
    }
}
producedCars(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])