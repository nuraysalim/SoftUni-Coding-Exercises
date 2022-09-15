function lastNumSeq(n, k) {
    let res = [1];

    while (res.length < n) {
            let lastKEls = res.slice(-k);
            
            if(lastKEls.length === 1) {
                res.push(1);
            } else {
                let sumOfEls = lastKEls.reduce((acc, curr) => acc += curr);
                res.push(sumOfEls); 
            }
    }

    return res;
}
console.log(lastNumSeq(6, 3));
console.log('--------------');
console.log(lastNumSeq(8, 2));