function argumentInfo(...params) {
    let countOfType = {};

    for (const param of params) {
        typeAndValue(param);
    }

    let sortedByCount = Object.entries(countOfType).sort((a, b) => b[1] - a[1]);
   
  for (const countOfType of sortedByCount) {
    console.log(`${countOfType[0]} = ${countOfType[1]}`);
  }

    function typeAndValue(parameter) {
       let type = typeof parameter;

       countOfType[type] = (countOfType.hasOwnProperty(type)) === true ? countOfType[type] += 1 : 1;
       return console.log(`${type}: ${parameter}`);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); }, true, false)