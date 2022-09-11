function employees(input) {
    let myObj = {};

    for(let person of input){
        myObj.name = person;
        myObj.number = person.length;

        console.log(`Name: ${myObj.name} -- Personal Number: ${myObj.number}`)
    }

}
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ])