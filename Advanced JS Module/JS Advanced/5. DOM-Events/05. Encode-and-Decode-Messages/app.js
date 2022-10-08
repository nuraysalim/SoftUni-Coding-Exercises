function encodeAndDecodeMessages() {
    let paragraphs = document.getElementsByTagName('p');
    let mainDivChildren = document.getElementById('main').children;
    let text;

    for (const p of paragraphs) {
        let btn = p.parentElement.getElementsByTagName('button')[0];

        if(p.textContent === 'Message') {
           btn.addEventListener('click', encode);
        } else {
           btn.addEventListener('click', decode);
        }
    }

    function encode() {
        let message = mainDivChildren[0].getElementsByTagName('textarea')[0];
        text = message.value;
        
        let encodedText = '';

        for (const character of text) {
            let change = character.charCodeAt();
            change++;
            encodedText += String.fromCharCode(change);
        }

        message.value = '';

        let encodedTextArea = mainDivChildren[1].getElementsByTagName('textarea')[0];
        encodedTextArea.value = encodedText; 
    }

    function decode() {
        let encodedMessage = mainDivChildren[1].getElementsByTagName('textarea')[0];
        text = encodedMessage.value;

        let decodedText = '';

        for (const character of text) {
            let letter = character.charCodeAt();
            letter--;
            decodedText += String.fromCharCode(letter);
        }

        encodedMessage.value = decodedText;
    }
}