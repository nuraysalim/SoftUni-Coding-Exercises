function passwordValidator(password) {
    let charNumsInPass = password.length;
    let numCounter = 0;
    let mustConsistCounter = 0;
    let isValid = true;

    
    if(charNumsInPass < 6 || charNumsInPass > 10) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    }

    for(let i = 0; i < password.length; i++) {
        let aSCIITableValue = password.charCodeAt(i);

        if (!((aSCIITableValue >= 65 && aSCIITableValue <= 90) || 
        (aSCIITableValue >= 97 && aSCIITableValue <= 122) || 
        (aSCIITableValue >= 48 && aSCIITableValue <= 57))) {
        isValid = false;
        if(mustConsistCounter < 1) {
            mustConsistCounter++;
        console.log("Password must consist only of letters and digits");
        }
        }

        if((aSCIITableValue >= 48 && aSCIITableValue <= 57)) {
            numCounter++;
        }
    }

    if(numCounter < 2){
        isValid = false;
        console.log('Password must have at least 2 digits');
    } else if (isValid) {
        console.log("Password is valid");
    }

}
//passwordValidator("logIn")
//passwordValidator('MyPass123')
passwordValidator('Pa$s$s')
