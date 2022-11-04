async function lockedProfile() {
   const url = `http://localhost:3030/jsonstore/advanced/profiles`;
   const mainDiv = document.getElementById('main');

   let response = await fetch(url);
   let data = await response.json();

   createProfile(data);

   function createProfile(objData) {
    let profiles = Object.values(objData);

    for (const person of profiles) {
        let {id, username, email, age} = person

        let profile = createDomEls(username, email, age, id);
        mainDiv.appendChild(profile);
    }

      debugger
   }

   function createDomEls(username, email, age, id) {
        const divWrapper = document.createElement('div');
        divWrapper.classList.add('profile');

        const img = document.createElement('img');
        img.classList.add('userIcon');
        //Here src might not be working
        img.src = `./iconProfile2.png`;

        const lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';

        const lockBtn = document.createElement('input');
        lockBtn.type = 'radio';
        //DON'T KNOW IF I SHOULD ADD NAME AND WHAT THE NAME TO BE;
        lockBtn.value = 'lock';

        const unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock';

        const unlockBtn = document.createElement('input');
        unlockBtn.type = 'radio';
        //Don't know FOR NAME
        unlockBtn.value = "unlock";

        let hr = document.createElement('hr');

        let usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';

        let usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        //DON'T KNOW FOR NAME
        usernameInput.value = username;
        usernameInput.disabled = true;

        let divWithHiddenInfo = document.createElement('div');
        divWithHiddenInfo.id = id;
        divWithHiddenInfo.style.display = 'none';
        let secondHr = document.createElement('hr');
        let emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';
        let emailInput = document.createElement('input');
        emailInput.type = 'email';
        //DON'T KNOW NAME ?
        emailInput.value = email;
        emailInput.disabled = true;
        let ageLabel = document.createElement('label');
        ageLabel.textContent = 'Age:';
        let ageInput = document.createElement('input');
        ageInput.type = 'email';
        //Don't know
        ageInput.value = age;
        ageInput.disabled = true;

        let btn = document.createElement('button');
        btn.textContent = 'Show more';
        btn.addEventListener('click', showMoreInfo);

        //Apending to hidden DIV:
        divWithHiddenInfo.appendChild(secondHr);
        divWithHiddenInfo.appendChild(emailLabel);
        divWithHiddenInfo.appendChild(emailInput);
        divWithHiddenInfo.appendChild(ageLabel);
        divWithHiddenInfo.appendChild(ageInput);


        //Appending the rest to the wrapper:
        divWrapper.appendChild(img);
        divWrapper.appendChild(lockLabel);
        divWrapper.appendChild(lockBtn);
        divWrapper.appendChild(unlockLabel);
        divWrapper.appendChild(unlockBtn);
        divWrapper.appendChild(hr);
        divWrapper.appendChild(usernameLabel);
        divWrapper.appendChild(usernameInput);
        divWrapper.appendChild(divWithHiddenInfo);
        divWrapper.appendChild(btn);

        return divWrapper;
   }

   function showMoreInfo() {
    
   }
   

   debugger;
 
}
