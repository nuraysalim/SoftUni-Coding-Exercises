function lockedProfile() {
    let buttons = document.getElementsByTagName('button');
    
    for (const button of buttons) {
        button.addEventListener('click', showOrHide);
    }

    function showOrHide(e) {
        let lockOrUnlocked = e.target.parentNode.querySelectorAll('input[type=radio]');

        for (const btn of lockOrUnlocked) {
            if(!btn.checked) {
                continue;
            }
            let checkedBtn = btn.value;

            if(e.target.textContent === 'Show more') {

                if(checkedBtn === 'unlock') {
                    let hiddenInfo = e.target.parentNode.getElementsByTagName('div');
                    hiddenInfo[0].style.display = 'block';
                    e.target.textContent = 'Hide it';
                }   
            } else {

                if(checkedBtn === 'unlock') {
                    let hiddenInfo = e.target.parentNode.getElementsByTagName('div');
                    hiddenInfo[0].style.display = 'none';
                    e.target.textContent = 'Show more';
                }
            }
        }
    }
}