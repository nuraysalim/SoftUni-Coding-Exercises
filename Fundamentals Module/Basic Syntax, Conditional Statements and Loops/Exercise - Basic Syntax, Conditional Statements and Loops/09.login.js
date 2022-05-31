function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = '';
    let wrongPassCount = 0;
    let logingTries = input[index];
    index++;
     for (let i = username.length - 1; i >= 0; i--) {
         password += username[i];
     }

     while (password !== logingTries) {
         wrongPassCount++;
        logingTries = input[index];
        index++;
        if ( wrongPassCount === 4) {
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log("Incorrect password. Try again.");
        }
     }
     
     if (password === logingTries) {
         console.log(`User ${username} logged in.`);
     }
     
}
//login(['Acer','login','go','let me in','recA'])
//login(['momo','omom'])
login(['sunny','rainy','cloudy','sunny','not sunny'])