function lowestPricesInCities(arr) {
    let res = {};

    for (const info of arr) {
        let [town, product, price] = info.split(' | ');
        price = Number(price);
        
        if(!res.hasOwnProperty(product)) {
            res[product] = {price, town};
            continue;
        }

        if(res[product].price > price) {
            res[product].price = price;
            res[product].town = town;
            }
    }

    for (const key in res) {
        console.log(`${key} -> ${res[key].price} (${res[key].town})`);
        }
    }

   // console.table(res);
lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 8',
'Sofia | Orange | 2',
'Sofia | Peach | 8',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])