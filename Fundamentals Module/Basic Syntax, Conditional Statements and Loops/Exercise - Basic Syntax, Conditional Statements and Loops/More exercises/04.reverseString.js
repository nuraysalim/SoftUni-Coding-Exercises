function reverseString(string){
    let text = string;
    let index = text.length - 1;
    let printLine = '';

    for (i = index; i >= 0; i--) {
        printLine += text.charAt(i);
    }

    console.log(printLine);
}
reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");
