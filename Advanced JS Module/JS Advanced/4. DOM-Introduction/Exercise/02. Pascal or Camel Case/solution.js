function solve() {
  let text = document.getElementById('text').value
  text = text.toLowerCase()
              .trim()
              .split(' ');
  let command = document.getElementById('naming-convention').value;
  let output = [];

  switch (command) {
    case 'Camel Case': 
    output.push(text.shift());
    
      for (const word of text) {
        let firstLetter = word.slice(0, 1).toUpperCase();
        let theRestofWord = word.slice(1);
        output.push(firstLetter + theRestofWord);
      };
      break;
    case 'Pascal Case':
      for (const word of text) {
        let firstLetter = word.slice(0, 1).toUpperCase();
        let theRestofWord = word.slice(1);
        output.push(firstLetter + theRestofWord);
      };
      break;
    default: output = 'Error!';
    document.getElementById('result').innerHTML = output;
    return;
  }

  document.getElementById('result').innerHTML = output.join('')
}