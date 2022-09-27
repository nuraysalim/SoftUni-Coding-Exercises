//Judge gives 50/100

function fromJSONToHTMLTable(input){
    let arr = JSON.parse(input);
    let columnNames = Object.keys(arr[0]);
    
    let result = '<table>\n';

    result += '\t<tr>'

    for (const columnName of columnNames) {
        result += `<th>${columnName}</th>`;
    }

    result += '</tr>\n';
    
    for (const obj of arr) {
        let arrOfValues = Object.values(obj);

        result += '\t<tr>';

        for (let i = 0; i < arrOfValues.length; i++) {
            result += `<td>${escape(arrOfValues[i])}</td>`;
        }

        result += '</tr>\n';
    }

    function escape(value) {
        return value.toString().replace('<', '&lt;').replace('>', '&gt;');
    }

    result += '</table>';

    console.log(result);
}
fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`)
