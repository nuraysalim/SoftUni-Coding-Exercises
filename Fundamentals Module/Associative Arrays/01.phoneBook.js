function phoneBook(input) {
    let bookOfPhoneNums = {};

    for(let line of input) {
        let nameAndPhone = line.split(' ');

        bookOfPhoneNums[nameAndPhone[0]] = nameAndPhone[1];
    }

    for(let key in bookOfPhoneNums) {
        console.log(key, '->', bookOfPhoneNums[key]);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])