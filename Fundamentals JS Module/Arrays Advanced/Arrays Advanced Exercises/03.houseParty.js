function houseParty(arr) {
    let listOfGuests = [];

    for(let el of arr) {
      let command = el.split(' ');
      let name = command[0];
        if(command.length == 3){
            if(listOfGuests.includes(name)){
                console.log(`${name} is already in the list!`);
            } else {
                listOfGuests.push(name);
            }
        } else {
            if(!listOfGuests.includes(name)) {
                console.log(`${name} is not in the list!`);
            }else {
                let index = listOfGuests.indexOf(name);
                listOfGuests.splice(index, 1);
            }
        }
    }

    console.log(listOfGuests.join('\n'));
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
