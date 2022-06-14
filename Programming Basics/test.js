function solve(input) {
  for(i = 0; i < input.length; i++) {
    let aSCIITableValue = input.charCodeAt(i);

  if (!((aSCIITableValue >= 65 && aSCIITableValue <= 90) || 
        (aSCIITableValue >= 97 && aSCIITableValue <= 122) || 
        (aSCIITableValue >= 48 && aSCIITableValue <= 57))) {
        console.log("Password must consist only of letters and digits");
        }
  }
}
solve('logIn$');
