function revealWords(words, template) {
    let targetWordsArr = words.split(', ');
    let templateArr = template.split(' ');
    
    for(let targetWord of targetWordsArr) {

        for(let word of templateArr) {
            if(word.includes('*') && word.length === targetWord.length) {
                template = template.replace(word, targetWord);
            }
        }

    }
    console.log(template);
}
revealWords('great',
'softuni is ***** place for learning new programming languages')
console.log('--------------------');
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')