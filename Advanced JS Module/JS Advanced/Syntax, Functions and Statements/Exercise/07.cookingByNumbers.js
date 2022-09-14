function cookingByNumber(num, ...arrOfComms) {

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


/* More advanced way of solving this problem:
- Create a function that executes the commands for U;
- Call the function 5 times and save the values in a way that changes the input Num;
Bonus:
* Using the spread operator iterate through commands using the .forEach();
*/ 