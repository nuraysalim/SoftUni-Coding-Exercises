function convertToJSON(name, lastName, hairColor) {
    let myObj = {
        name,
        lastName,
        hairColor
    }
   
    console.log(JSON.stringify(myObj));
}
convertToJSON('George', 'Jones', 'Brown')