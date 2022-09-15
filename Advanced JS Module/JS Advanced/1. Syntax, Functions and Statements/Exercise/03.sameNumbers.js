//Optimazed solution:
/*- Transform num to String;
  - Use normal for loop
*/

function sameNumbers(num) {
  let numToStr = num.toString();
  let firstDigit = numToStr[0];
  let isSame = true;
  let sumOfDigits = Number(firstDigit);

  for (let i = 1; i < numToStr.length; i++) {
    if (firstDigit !== numToStr[i]) {
      isSame = false;
    }
    
    sumOfDigits += Number(numToStr[i]);
  }

    console.log(isSame);
    console.log(sumOfDigits);
}
sameNumbers(222222222222)
console.log('----------------')
sameNumbers(1234)

/*First solution:

function sameNums(num) {
    let sum = 0;
    let previousDigit = num.toString().split('')[0];
    let areSame;
    
    // I'm not using the .forEach() here correctly. When you use it the variable
    //that you use (here - res) should be assigned a value and you should use the value.
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
*/ 

