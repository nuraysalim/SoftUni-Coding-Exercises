function listOfNames(arr) {
    let sortedNames = arr.sort((a, b) => a.localeCompare(b))
    let num = 1;

    for (const name of sortedNames) {
        console.log(`${num}.${name}`);
        num++;
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"])