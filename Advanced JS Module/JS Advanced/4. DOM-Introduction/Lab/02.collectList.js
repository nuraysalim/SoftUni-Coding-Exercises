function extractText() {
    let nodes = document.querySelectorAll('ul#items li');
    console.log(nodes);
    let textArea = document.querySelector('#result');

    for (const node of nodes) {
        textArea.value += node.textContent + '\n';
    }
}