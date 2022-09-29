function colorizeRows() {
    let rows = document.querySelectorAll('table tr');
    let index = 1;

    for (const row of rows) {
        if(index % 2 === 0) {
            row.style.background = 'teal';
        }
        index++
    }
}