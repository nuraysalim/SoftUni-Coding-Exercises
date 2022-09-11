function repeatString(str, repeatNum) {
    let printLine = "";
    
    for (let i = 0; i < repeatNum; i++) {
        printLine += str;
    }

    console.log(printLine);
}
repeatString('abc', 3) 
repeatString('String', 2)