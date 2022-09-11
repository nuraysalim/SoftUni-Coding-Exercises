function charactersInRange(char1, char2) {
    let start = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let end = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

    let charsRangeArr = [];

    for (let i = start + 1; i < end; i++) {
        let currentChar = String.fromCharCode(i)
        charsRangeArr.push(currentChar);
    }

    console.log(charsRangeArr.join(" "));
}
charactersInRange('a', 'd')
charactersInRange('#', ':')
charactersInRange('C', '#')