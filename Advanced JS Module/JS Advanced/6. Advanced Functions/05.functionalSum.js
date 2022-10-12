function add(a) {
    let sum = a;
    function added(b) {
        sum += b;
        return added;
    }

    added.toString = function() {return sum };
    return added;
}
console.log(add(1))
console.log(add(1)(6)(-3));