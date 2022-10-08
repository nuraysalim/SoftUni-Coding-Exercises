function solve() {
  let textAreas = document.getElementsByTagName('textarea');
  let buttons = document.getElementsByTagName('button');
  
  for (const button of buttons) {
    if(button.textContent === 'Generate') {
      button.addEventListener('click', generate);
    } else {
      button.addEventListener('click', buy);
    }
  }
  
  function generate() {
    debugger;
    let tableBody = document.getElementsByTagName('tbody')[0];
    let parsed = JSON.parse(textAreas[0].value);
    
    for (const obj of parsed) {
      let newRow = document.createElement('tr');
      
      for (const key in obj) {
      let td = document.createElement('td');

      if(key === 'img') {
        let img = document.createElement('img');
        img.setAttribute('src', obj[key]);
        td.appendChild(img);
        newRow.prepend(td);
      } else {
        let p = document.createElement('p');
        p.textContent = obj[key];
        td.appendChild(p);
        newRow.appendChild(td);
      }
      
    }
    let tdExtra = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    tdExtra.appendChild(checkbox);
    newRow.appendChild(tdExtra);
    tableBody.appendChild(newRow);
   }
  }

  function buy() {
    debugger;
    let checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]'));
    checkboxes.shift();
    let furnitures = [];
    let totalPrice = 0;
    let decorationFacSum = 0;

    for (const checkbox of checkboxes) {
      if(!checkbox.checked) {
        continue;
      }

      let infoOfTheRow = checkbox.parentElement.parentElement.getElementsByTagName('p');
      furnitures.push(infoOfTheRow[0].textContent);
      totalPrice += Number(infoOfTheRow[1].textContent);
      decorationFacSum += Number(infoOfTheRow[2].textContent);
    }

    textAreas[1].value = `Bought furniture: ${furnitures.join(', ')}\n`;
    textAreas[1].value += `Total price: ${totalPrice.toFixed(2)}\n`;
    textAreas[1].value += `Average decoration factor: ${decorationFacSum / checkboxes.length}`;
  }
}