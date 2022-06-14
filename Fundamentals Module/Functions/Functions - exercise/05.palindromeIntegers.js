function palindromeIntegers(arrayOfNums) {
   
    for (let el of arrayOfNums) {
        let original = String(el);
        let reversed = String(el).split('').reverse().join('');
       
        if (original == reversed) {
            console.log(true);
        } else {
            console.log(false);
        }
        }
}
palindromeIntegers([123,323,421,121])
palindromeIntegers([32,2,232,1010])