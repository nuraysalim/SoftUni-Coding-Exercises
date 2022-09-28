function heroicInventory(arr) {
    let heroRegister = [];

    for (const info of arr) {
        let [name, level, ...items] = info.split(' / ');
        level = Number(level);
        if(items.length !== 0) {
            items = items[0].split(', ');
    
            heroRegister.push({name, level, items});
            continue;
        }

        heroRegister.push({name, level, items});
    }
    
    console.log(JSON.stringify(heroRegister));
}
heroicInventory(['Jake / 1000'])