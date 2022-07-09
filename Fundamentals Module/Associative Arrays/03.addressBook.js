function addressBook(input) {
    let bookOfAdresses = {};

    for(let info of input) {
        let person = info.split(':');

        bookOfAdresses[person[0]] = person[1];
    }

    let keys = Object.keys(bookOfAdresses);
    let sorted = keys.sort((a, b) => a.localeCompare(b));
    
    for(let key of sorted) {
        console.log(key, '->', bookOfAdresses[key]);
    }
  
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])