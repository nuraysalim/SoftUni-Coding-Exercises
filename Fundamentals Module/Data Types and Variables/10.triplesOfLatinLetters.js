function triplesOfLatinLetters(n) {
        let letters = 'abcdefghijklmnopqrstuvwxyz'
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                for(let k = 0; k < n; k++){
        console.log(`${letters.charAt(i)}${letters.charAt(j)}${letters.charAt(k)}`);
                }
            }
        }
    }
triplesOfLatinLetters(2)