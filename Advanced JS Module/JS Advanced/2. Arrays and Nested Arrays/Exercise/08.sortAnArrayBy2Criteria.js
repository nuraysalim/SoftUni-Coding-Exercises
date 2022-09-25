function sorting(arr) {
    let res = arr.sort((a, b) => {
      return  a.length - b.length || a.localeCompare(b);
    });

    console.log(res.join('\n'));
}
sorting(['test', 
'Deny', 
'omen', 
'Default'])