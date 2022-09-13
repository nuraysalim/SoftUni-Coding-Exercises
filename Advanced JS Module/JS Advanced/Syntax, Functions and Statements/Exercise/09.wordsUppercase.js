function wordsUppercase(str) {
    const pattern = /\w+/gm;
    const res = [];
    const matched = str.match(pattern).forEach(word => {
        res.push(word.toUpperCase())
    });;;
   
    console.log(res.join(', ')); 
}
wordsUppercase('Hi, how are you?')