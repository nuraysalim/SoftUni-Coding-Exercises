function streamOfLetters(input) {
    let index = 0;
    let command = input[index];
    index++;
    let c = 0;
    let n = 0;
    let o = 0;
    let finalWord = ""
    let word = "";

    while(command !== "End") {
        let letter = command;
        if((letter >= "A" && letter <= "Z") || (letter >= "a" && letter <= "z")) {
            switch (letter) {
             case "c": c++;
             break;
             case "n": n++;
             break;
             case "o": o++;
             break;
            }
            if (c != 1 && letter === "c") {
                word += letter
            } else if (n != 1 && letter === "n") {
                word += letter
            } else if (o != 1 && letter === "o") {
                word += letter
            } else if (letter !== "n" && letter !== "c" && letter !== "o") {
                word += letter
            }
            }
        if (c >= 1 && n >= 1 && o >= 1) {
            c = 0;
            n = 0;
            o = 0;
            finalWord += word + " "
            word = ""
        }
        command = input[index];
        index++;
    }

    if (command === "End") {
        console.log(`${finalWord}`)
    }
}
streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"])