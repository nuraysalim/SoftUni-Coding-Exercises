function extractingText(elementId) {
let para = document.getElementById(elementId).textContent;
  let pattern = /\(([^)]+)\)/g;
  let result = [];

    let matched = pattern.exec(para);

    while(matched){
        result.push(matched[1]);
        matched = pattern.exec(para); 
    }

    return result.join('; ')
}
extractingText('content')