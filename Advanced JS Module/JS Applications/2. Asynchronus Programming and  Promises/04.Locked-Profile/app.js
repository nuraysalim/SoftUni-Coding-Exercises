// async function lockedProfile() {
//    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
//    const mainDiv = document.getElementById('main');
//    mainDiv.innerHTML = '';

//    let response = await fetch(url);
//    let data = await response.json();

//    createProfile(data);

//    function createProfile(objData) {
//     let profiles = Object.values(objData);
//     let idNumber = 1;

//     for (const person of profiles) {
//         let {_id, username, email, age} = person
        
//         let profile = createDomEls(username, email, age, _id, idNumber);
//         mainDiv.appendChild(profile);

//         idNumber++;
//     }

//    }

//    function createDomEls(username, email, age, id, idNumber) {
      
//         const divWrapper = document.createElement('div');
//         divWrapper.classList.add('profile');

//         const img = document.createElement('img');
//         img.classList.add('userIcon');
//         img.src = `./iconProfile2.png`;

//         const lockLabel = document.createElement('label');
//         lockLabel.textContent = 'Lock';

//         const lockBtn = document.createElement('input');
//         lockBtn.type = 'radio';
//         lockBtn.name = `user${idNumber}Locked`;
//         lockBtn.value = 'lock';
//         lockBtn.checked = true;

//         const unlockLabel = document.createElement('label');
//         unlockLabel.textContent = 'Unlock';

//         const unlockBtn = document.createElement('input');
//         unlockBtn.type = 'radio';
//         unlockBtn.name = `user${idNumber}Locked`;;
//         unlockBtn.value = "unlock";

//         let hr = document.createElement('hr');

//         let usernameLabel = document.createElement('label');
//         usernameLabel.textContent = 'Username';

//         let usernameInput = document.createElement('input');
//         usernameInput.type = 'text';
//         usernameInput.value = username;
//         usernameInput.setAttribute('value', username);
//         usernameInput.name = `user${idNumber}Locked`;
//         usernameInput.disabled = true;

//         //HIDDEN INFO DIV
//         let divWithHiddenInfo = document.createElement('div');
//         divWithHiddenInfo.id = id;
//         divWithHiddenInfo.setAttribute('name', 'hiddenInfo');
//         divWithHiddenInfo.style.display = 'none';

//         let secondHr = document.createElement('hr');

//         let emailLabel = document.createElement('label');
//         emailLabel.textContent = 'Email:';
//         let emailInput = document.createElement('input');
//         emailInput.type = 'email';
//         emailInput.value = email;
//         emailInput.setAttribute('value', email);
//         emailInput.name = `user${idNumber}Email`
//         emailInput.disabled = true;

//         let ageLabel = document.createElement('label');
//         ageLabel.textContent = 'Age:';
//         let ageInput = document.createElement('input');
//         ageInput.type = 'email';
//         ageInput.value = age;
//         ageInput.setAttribute('value', age);
//         ageInput.name = `user${idNumber}Age`;
//         ageInput.disabled = true;

//         let btn = document.createElement('button');
//         btn.textContent = 'Show more';
//         btn.addEventListener('click', showMoreInfo);

//         //Apending to hidden DIV:
//         divWithHiddenInfo.appendChild(secondHr);
//         divWithHiddenInfo.appendChild(emailLabel);
//         divWithHiddenInfo.appendChild(emailInput);
//         divWithHiddenInfo.appendChild(ageLabel);
//         divWithHiddenInfo.appendChild(ageInput);


//         //Appending the rest to the wrapper:
//         divWrapper.appendChild(img);
//         divWrapper.appendChild(lockLabel);
//         divWrapper.appendChild(lockBtn);
//         divWrapper.appendChild(unlockLabel);
//         divWrapper.appendChild(unlockBtn);
//         divWrapper.appendChild(hr);
//         divWrapper.appendChild(usernameLabel);
//         divWrapper.appendChild(usernameInput);
//         divWrapper.appendChild(divWithHiddenInfo);
//         divWrapper.appendChild(btn);

//         return divWrapper;
//    }

//    function showMoreInfo(e) {
//       let profile = e.currentTarget.parentNode
//       let divWithHiddenInfo = profile.querySelector('div[name=hiddenInfo]');
//       let showMoreBtn = profile.querySelector('button');
//       let [lockBtn, unlockBtn] = Array.from(profile.querySelectorAll('input[type=radio]'));

      
//     if (unlockBtn.checked) {
//       divWithHiddenInfo.style.display = 'block';
//       showMoreBtn.textContent = 'Hide it';
//       showMoreBtn.removeEventListener('click', showMoreInfo);
//       showMoreBtn.addEventListener('click', hideTheInfo);
//     }
//    }

//    function hideTheInfo(e) {
//       let profile = e.currentTarget.parentNode
//       let divWithShownInfo = profile.querySelector('div[name=hiddenInfo]');
//       let hideBtn = profile.querySelector('button');
//       let [lockBtn, unlockBtn] = Array.from(profile.querySelectorAll('input[type=radio]'));
      
//       if(unlockBtn.checked) {
//          divWithShownInfo.style.display = 'none';
//          hideBtn.textContent = 'Show more';
//          hideBtn.removeEventListener('click', hideTheInfo);
//          hideBtn.addEventListener('click', showMoreInfo);
//       }

//    }
 
// }

async function lockedProfile() {
   let mainDiv = document.querySelector('#main');
   mainDiv.innerHTML = '';

   let result = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
   let profileData = Object.values(await result.json());

   profileData.forEach((user, i) => {
       let userCard = document.createElement('div');
       userCard.className = 'profile';
       let idNumber = i+1;
       userCard.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
                             <label>Lock</label>
                             <input type="radio" name="user${idNumber}Locked" value="lock" checked>
                             <label>Unlock</label>
                             <input type="radio" name="user${idNumber}Locked" value="unlock"><br>
                             <hr>
                             <label>Username</label>
                             <input type="text" name="user${idNumber}Username" value="${user.username}" disabled readonly />
                             <div id="user1HiddenFields" style="display:none">
                                 <hr>
                                 <label>Email:</label>
                                 <input type="email" name="user${idNumber}Email" value="${user.email}" disabled readonly />
                                 <label>Age:</label>
                                 <input type="email" name="user${idNumber}Age" value="${user.age}" disabled readonly />
                             </div>
                             <button>Show more</button>`;
       mainDiv.appendChild(userCard);
    });

   let buttonElements = document.querySelectorAll('div button');
   for (let i = 0; i < buttonElements.length; i++) {
       let button = buttonElements[i];
       let profileElement = button.parentElement;
       let lockedElement = profileElement.querySelector('input[value="lock"]');
       let hiddenInfoElement = profileElement.querySelector(`#user1HiddenFields`);

       button.addEventListener('click', () => {

           if (!lockedElement.checked && button.textContent == 'Show more') {
               hiddenInfoElement.style.display = 'block';
               button.textContent = 'Hide it';
           } else if (!lockedElement.checked && button.textContent == 'Hide it') {
               hiddenInfoElement.style.display = 'none';
               button.textContent = 'Show more';
           }
       });
   }
}