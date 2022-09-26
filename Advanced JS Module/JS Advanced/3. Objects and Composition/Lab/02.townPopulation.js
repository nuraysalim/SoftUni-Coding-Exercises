function townPopulation(arr) {
    let res = {};

    for (const townsInfo of arr) {
        let splitted = townsInfo.split(' <-> ');
        let townName = splitted[0];
        let population = Number(splitted[1]);

        if (!res.hasOwnProperty(townName)) {
            res[townName] = population;
            continue;
        }

        res[townName] += population;
    }

    for (const town in res) {
        console.log(`${town} : ${res[town]}`);   
    }
}
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])