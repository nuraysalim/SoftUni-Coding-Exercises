function addItem() {
    let itemText = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');
    
    let optionEl = document.createElement('option');
    optionEl.textContent = itemText.value;
    optionEl.value = itemValue.value;

    let selectMenu = document.getElementById('menu');
    selectMenu.appendChild(optionEl);

    itemText.value = '';
    itemValue.value = '';
}