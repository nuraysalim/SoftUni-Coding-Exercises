//My solution - Judge -> 0/100:
// function solve() {
//   let textAreas = document.getElementsByTagName('textarea');
//   let buttons = document.getElementsByTagName('button');
  
//   for (const button of buttons) {
//     if(button.textContent === 'Generate') {
//       button.addEventListener('click', generate);
//     } else {
//       button.addEventListener('click', buy);
//     }
//   }
  
//   function generate() {
//     debugger;
//     let tableBody = document.getElementsByTagName('tbody')[0];
//     let parsed = JSON.parse(textAreas[0].value);
    
//     for (const obj of parsed) {
//       let newRow = document.createElement('tr');
      
//       for (const key in obj) {
//       let td = document.createElement('td');

//       if(key === 'img') {
//         let img = document.createElement('img');
//         img.setAttribute('src', obj[key]);
//         td.appendChild(img);
//         newRow.prepend(td);
//       } else {
//         let p = document.createElement('p');
//         p.textContent = obj[key];
//         td.appendChild(p);
//         newRow.appendChild(td);
//       }
      
//     }
//     let tdExtra = document.createElement('td');
//     let checkbox = document.createElement('input');
//     checkbox.setAttribute('type', 'checkbox');
//     tdExtra.appendChild(checkbox);
//     newRow.appendChild(tdExtra);
//     tableBody.appendChild(newRow);
//    }
//   }

//   function buy() {
//     debugger;
//     let checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]'));
//     let furnitures = [];
//     let totalPrice = 0;
//     let decorationFacSum = 0;

//     for (const checkbox of checkboxes) {
//       if(!checkbox.checked) {
//         continue;
//       }

//       let infoOfTheRow = checkbox.parentElement.parentElement.getElementsByTagName('p');
//       furnitures.push(infoOfTheRow[0].textContent);
//       totalPrice += Number(infoOfTheRow[1].textContent);
//       decorationFacSum += Number(infoOfTheRow[2].textContent);
//     }

//     textAreas[1].value = `Bought furniture: ${furnitures.join(', ')}\n`;
//     textAreas[1].value += `Total price: ${totalPrice.toFixed(2)}\n`;
//     textAreas[1].value += `Average decoration factor: ${decorationFacSum / checkboxes.length}`;
//   }
// }


// Not my solution - Judge -> 100/100
function solve() {
  let buttons = document.getElementsByTagName('button');

  buttons[0].addEventListener('click', generate);
  buttons[1].addEventListener('click', buy);

  function generate() {
    let currentItems = JSON.parse(document.querySelectorAll('textarea')[0].value);
    let tableBody = document.getElementsByTagName('tbody')[0];

    for (const item of currentItems) {
      let tableRow = document.createElement('tr');
      tableRow.innerHTML = `<td><img src='${item.img}'></td>` +
                            `<td><p>${item.name}</p></td>` +
                            `<td><p>${item.price}</p></td>` +
                            `<td><p>${item.decFactor}</p></td>` +
                            `<td><input type='checkbox'></td>`;
      tableBody.appendChild(tableRow);
    }
  }

  function buy() {
    let lastTextArea = document.querySelectorAll('textarea')[1];
    let table = Array.from(document.querySelectorAll('tbody tr'));
    let res = [];

    for (const el of table) {
      if(el.querySelector('input[type=checkbox]:checked')) {
        let tableData = Array.from(el.querySelectorAll('td'));
        let info = {
          name: tableData[1].children[0].textContent,
          price: tableData[2].children[0].textContent,
          decFactor: tableData[3].children[0].textContent,
        }
        res.push(info);
      }
    }
    let names = [];
    let totalPrice = 0;
    let defactor = 0;

    for (const item of res) {
      names.push(item.name);
      totalPrice += Number(item.price);
      defactor += Number(item.decFactor);
    }
    defactor /= res.length;

    lastTextArea.value = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${defactor}`;
  }
}