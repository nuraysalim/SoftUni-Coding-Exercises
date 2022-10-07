function attachEventsListeners() {
    let buttons = document.querySelectorAll('input[type=button]');
    
    for (const button of buttons) {
        button.addEventListener('click', convert);
    }
    
    function convert(e) {
         let input = Number(e.target.parentNode.querySelector('input[type=text]').value);
        let idOfBtn = e.target.id;
        let toDays;

         switch (idOfBtn) {
             case 'daysBtn': toDays = input;
                 break;
             case 'hoursBtn':
               toDays = input / 24;
                 break;
             case 'minutesBtn':
                toDays = input / 1440
                 break;
             case 'secondsBtn':
                toDays = input / 86400;
                 break;
    }
    populate(toDays);
    }

    function populate(value) {
        let inputs = Array.from(document.querySelectorAll('input[type=text]'));
        inputs.shift().value = value;
       let currentValue = value * 24;
        for (const input of inputs) {
            input.value = currentValue;
            currentValue *= 60;
        }
    }
}