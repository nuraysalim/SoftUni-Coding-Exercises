function cookingByNumber(num, com1, com2, com3, com4, com5) {
    let number = Number(num);
    const arrOfComms = [com1, com2, com3, com4, com5];

    for (const command of arrOfComms) {
        switch (command) {
            case 'chop': num /= 2; 
                break;
            case 'dice': num = Math.sqrt(num);
                break;
            case 'spice': num += 1;
                break;
            case 'bake':  num *= 3;
                break;
            case 'fillet': num -= num * 0.2;
                break;
        }

        console.log(num);
    }
}
cookingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log('-------------');
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet')