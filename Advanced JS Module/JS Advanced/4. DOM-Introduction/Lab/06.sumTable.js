function sum() {
    let elements = document.getElementsByTagName('tr');
    let sumOfCosts = 0;

    for(let i = 1; i < elements.length - 1; i++) {
        let row = document.getElementsByTagName('tr')[i];
        sumOfCosts += Number(row.children[1].textContent);
    }
    
 document.getElementById('sum').textContent = sumOfCosts;
}