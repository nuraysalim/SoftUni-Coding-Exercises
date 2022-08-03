function passwordReset(input) {
  let pass = input.shift();
  let index = 0;
  let line = input[index];
  index++;

  while (line !== "Done") {
    let tokens = line.split(" ");
    let command = tokens[0];
    let firstParam = tokens[1];
    let secondParam = tokens[2];
    let passSubstr;

    switch (command) {
      case "TakeOdd":
        let newPass = [];

        for (let i = 0; i < pass.length; i++) {
          if (i % 2 !== 0) {
            newPass.push(pass[i]);
          }
        }

        pass = newPass.join("");

        console.log(pass);
        break;

      case "Cut":
        let startIndex = Number(firstParam);
        let endIndex = startIndex + Number(secondParam);

        passSubstr = pass.substr(startIndex, endIndex);
        pass = pass.replace(passSubstr, "");

        console.log(pass);
        break;

      case "Substitute":
        passSubstr = firstParam;
        let substitute = secondParam;

        if (!pass.includes(passSubstr)) {
          console.log("Nothing to replace!");
        } else {

          while (pass.includes(passSubstr)) {
            pass = pass.replace(passSubstr, substitute);
          }

          console.log(pass);
        }
        break;
    }

    line = input[index];
    index++;
  }

  console.log(`Your password is: ${pass}`);
}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
console.log("-----------------------");
passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
