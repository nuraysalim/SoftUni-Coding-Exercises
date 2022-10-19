class Hex {
    constructor(num) {
        this.number = num;
    };

    valueOf() {
        return this.number;
    };

    toString() {
        return '0x' + (this.number.toString(16)).toUpperCase();
    };

    plus(number) {
        let sum;
        if(typeof number === 'number') {
          sum =  this.number + number;
        } else {
            let hexToDes = parseInt(number, 16);
            sum = this.number + hexToDes;
        }
     return new Hex(sum);
    };

    minus(number) {
        let sum;
        if(typeof number === 'number') {
          sum =  this.number - number;
        } else {
            let hexToDes = parseInt(number, 16);
            sum = this.number - hexToDes;
        }

        return new Hex(sum);
    };

    parse(string) {
        let parsed = parseInt(string, 16);
        return  parsed;
    };
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus('AAA').toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('0'));