function rightPlace(string, char, string2) {
    let res = "";


    for (i = 0; i < string.length; i++) {
        let word = string[i];
        if (word === '_') {
            res += char;
        } else {
        res += word;
        }
    }

    let output = res === string2 ? 'Matched' : 'Not Matched';
    
    console.log(output);
    
}
rightPlace('Str_ng', 'I', 'Strong')