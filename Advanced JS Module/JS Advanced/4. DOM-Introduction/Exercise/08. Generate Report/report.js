function generateReport() {
    let headers = document.querySelectorAll('thead th input');
    let tableRow = document.querySelectorAll('tbody tr')
    let res = [];

   for (let i = 0; i < tableRow.length; i++) {
    let tableData = tableRow[i].cells;
    let tempData = {};
     
    for(let j = 0; j < tableData.length; j++) {
        if(headers[j].checked) {
            tempData[headers[j].name] = tableData[j].textContent;
        }
    }
    res.push(tempData);
    }

    document.getElementById('output').textContent = JSON.stringify(res);
}