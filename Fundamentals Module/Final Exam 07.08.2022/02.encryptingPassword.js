function encryptingPassword(input) {
    let n = Number(input.shift());
    let pattern = /([\S\s]+)\>(?<number>\d{3})\|(?<letters>[a-z]{3})\|(?<capitalLetters>[A-Z]{3})\|(?<symbols>[^<>]{3})\<(\1)/g;

    for(let i = 0; i < n; i++) {

            let matchedPass = pattern.exec(input[i]);

            if(matchedPass) {
                let line = (input[i]).split('|');
                let start = line.shift().length;
                let end = line.pop().length;

                if(start !== end) {
                   console.log("Try another password!");
                } else {
                    let incription = matchedPass.groups['number'] + matchedPass.groups['letters'] + matchedPass.groups['capitalLetters'] + matchedPass.groups['symbols'];
                    console.log(`Password: ${incription}`);
                }
            } else {
                console.log("Try another password!");
            }
    }
}
encryptingPassword(["3",
"##>00|no|NO|!!!?<###",
"#$##>123|yes|YES|!!!<##!#",
"$$<111|noo|NOPE|<<>$$"])
console.log('------------');
encryptingPassword(["5",
"<<*>111|mqu|BAU|mqu<*<<",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])