function edit() {
    let regex = /%[A-Za-z ]+%/g;

    let text = element.getElementByTagName('h1');
    let matched = text.match(regex);
    
}