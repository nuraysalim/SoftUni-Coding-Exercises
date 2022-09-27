function carFactory(obj) {
    let res = {
        model: obj.model,
    }

    if(obj.power <= 90) {
        res.engine = {power: 90, volume: 1800};
    } else if(obj.power <= 120) {
        res.engine = {power: 120, volume: 2400};
    } else {
        res.engine = {power: 200, volume: 3500};
    };

    if(obj.carriage === 'hatchback' || obj.carriage === 'coupe') {
         res.carriage = {type: obj.carriage, color: obj.color};
    }
    
    if (obj.wheelsize % 2 === 0) {
        obj.wheelsize -= 1;
    }

    /* The line below can definitely be optimised:
        - My ideas were to use: for loop, or toString().repeat(4) and to array;
        They they seem like overkill (more complicated than it is needed) to me.
    */
    res.wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];

    return res;
}
carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })