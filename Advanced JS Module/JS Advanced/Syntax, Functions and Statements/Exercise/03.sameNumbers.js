function sameNums(num) {
    let sum = 0;
    let previousDigit = num.toString().split('')[0];
    let areSame;
 let res = num.toString().split('').forEach(digit => {
   sum += Number(digit);

   if(previousDigit != digit) {
    areSame = false;
   } else {
    areSame = true;
   }
   previousDigit = digit;
 });;
 
 console.log(areSame);
 console.log(sum);
}
sameNums(222222223)