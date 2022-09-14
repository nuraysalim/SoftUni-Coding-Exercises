function wordsUppercase(str) {
  return str.match(/\w+/g).join(', ').toUpperCase();
}
console.log(wordsUppercase('Hi, how are you?'))
console.log(wordsUppercase('hello'));
/* Another way of solving the problem:
- Using .charCodeAt() compare if the characters' ASCII code is in the range for only letters.
! You can make all the letter of the str .toLower() case so you have less if cases
*/ 