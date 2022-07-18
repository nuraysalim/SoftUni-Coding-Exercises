function revealWords(words, template) {
    let targetWordsArr = words.split(', ');
    let sentence = template;
    let templateArr = template.split(' ');
    let res;
    
    for(let targetWord of targetWordsArr) {
        let lengOfTarWord = targetWord.length;

        for(let word of templateArr) {
            if(word.includes('*') && word.length === lengOfTarWord) {
                let target = '*'.repeat(lengOfTarWord);
                res = sentence.replace(target, targetWord);
            }
        }
    }
    console.log(res);

}
revealWords('great',
'softuni is ***** place for learning new programming languages')
console.log('--------------------');
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')