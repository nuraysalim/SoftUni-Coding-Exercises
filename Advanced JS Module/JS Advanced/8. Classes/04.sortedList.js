class List {
    _listOfNums = [];
    constructor() {
        this.size = this._listOfNums.length;
    }

    add(element) {
        this._listOfNums.push(element);
        this.size = this._listOfNums.length;
      return  this._listOfNums = this._listOfNums.sort((a, b) => a - b);
    };

    remove(index) {
        if(this._listOfNums[index]) {
            let firstPart = this._listOfNums.slice(0, index);
            let secondPart = this._listOfNums.slice(index + 1);
            this._listOfNums = firstPart.concat(secondPart);
            this.size = this._listOfNums.length;
    return   this._listOfNums = this._listOfNums.sort((a, b) => a - b);
        }
    };

    get(index) {
        if(this._listOfNums[index]) {
           return this._listOfNums[index];
        }
    };
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size)
