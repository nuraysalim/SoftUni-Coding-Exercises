function inventory(heroesArr) {
    let heroesInfo = [];

    heroesArr.forEach(el => {
        let [name, level, items] = el.split(' / ');

        let currHero = {
            name,
            level:+level, 
            items
        };
        heroesInfo.push(currHero);
    });

    let sortedBylevel = heroesInfo.sort((a, b) =>{ 
        return a.level - b.level;
    });

    for(let hero of sortedBylevel){
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log((`items => ${hero.items}`));

}
}
inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])