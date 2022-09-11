function sorting(arrOfNums) {
    let sortedRes = arrOfNums.sort((a, b) => {
       return b - a;
    });
    let res = [];
    let index = arrOfNums.length;
    
    for(let i = 1; i < index; i++) {
        let smallestNum = sortedRes.pop();
        sortedRes.splice(i, 0, smallestNum);
        i++;
    }
    console.log(sortedRes.join(' '));
}
//sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])