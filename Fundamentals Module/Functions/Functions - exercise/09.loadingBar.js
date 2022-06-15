function loadingBar(num) {
    let loadingBarPer = '';
    let percentages = num / 10;
    let dots = 10 - percentages; 

    for (let j = 0; j < percentages; j++) {
        loadingBarPer += '%'; 
    }

    for(let i = 0; i < dots; i++) {
        loadingBarPer += '.'
    }

    if(num < 100) {
        console.log(`${num}% [${loadingBarPer}]`); 
        console.log(`Still loading...`);
    } else {
        console.log(`${num}% Complete!`);
    }

}
loadingBar(100)