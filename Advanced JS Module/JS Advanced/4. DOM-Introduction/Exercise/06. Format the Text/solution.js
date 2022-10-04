function solve() {
    let text = document.getElementById('input').value
    let arrayText = text.split('.').filter(sentence => sentence.length > 0);
    let output = document.getElementById('output');
    output.innerHTML = '';

    for (let i = 0; i < arrayText.length; i += 3) {
    let paragraphText = [];

      for (let j = 0; j < 3; j++) {
        if(arrayText[i + j]) {
          paragraphText.push(arrayText[i + j]);
        }
      }

    paragraphText.push('');
    let resText = paragraphText.join('. ')
    output.innerHTML += `<p>${resText}</p>`;
  }
  }
