window.addEventListener('DOMContentLoaded', onLoadHTML);
document.querySelector('.load').addEventListener('click', onLoadCatch);
document.getElementById('logout').addEventListener('click', onLogOut);

const catches = document.getElementById('catches');

async function updateAndDelete(e) {
    const btn = e.target;
    //debugger
    if(btn.classList.value !== "update" && btn.classList.value !== "delete") {
        return;
    };

    const id = btn.dataset.id;
    const url = `http://localhost:3030/data/catches/${id}`;
    let response;
    let header;
    
    if(btn.classList.value === 'update') {
        const body = getUpdatedInfo(btn); 
        header = getHeader("PUT", body);
   //debugger
        try {
        if(Object.values(body).some(x => x == '')){
            throw new Error('All fields are required!');
        };

        response = await fetch(url, header);

        if(response.ok !==  true) {
            const error = await response.json();
            throw new Error(error.message);
        };
        } catch (err) {
            alert(err.message);
        };

    } else {
        header = getHeader("DELETE");

        try {
            response = await fetch(url, header);
    
            if(response.ok !==  true) {
                const error = await response.json();
                throw new Error(error.message);
            };
        } catch (err) {
            alert(err.message);
        }
    }

    listOfCatches();
   // debugger;
}

function getUpdatedInfo(btn){
    let [angler, weight, species, location, bait, captureTime] = btn.parentElement.querySelectorAll('input');
    

    return {
    "angler": angler.value,
    "weight": weight.value,
    "species": species.value,
    "location": location.value,
    "bait": bait.value,
    "captureTime": captureTime.value
}
}


async function onLogOut() {
    const url = `http://localhost:3030/users/logout`;

    const header = getHeader('GET');

    const response = await fetch(url, header);
   sessionStorage.clear();
   onLoadHTML();
   window.location = "./index.html";
};

function onLoadHTML() {
    catches.remove();
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    const userName = document.querySelector('p.email span');
    const addBtn = document.querySelector('.add');
 
    if(userData){
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = 'inline-block';
        userName.textContent = userData.email;
        addBtn.disabled = false;
    } else {
        document.getElementById('guest').style.display = 'inline-block';
        document.getElementById('user').style.display = 'none';
        userName.textContent = 'guest';
        addBtn.disabled = true;
    };

    document.querySelector('.load').addEventListener('click', listOfCatches);
    //this can be moved to listOfCatches - maybe:
    document.getElementById('main').addEventListener('click', updateAndDelete);
    document.getElementById('addForm').addEventListener('submit', onCreateSubmit);
};

async function listOfCatches() {
    if (!JSON.parse(sessionStorage.getItem('userData'))) {
        return;
    };

    const url = `http://localhost:3030/data/catches`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('catches').replaceChildren(...data.map(createPreview));
    } catch (err) {
        alert(err.message)
    }
   
};

function createPreview(item) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    const {angler, weight, species, location, bait, captureTime, _id, _ownerId} = item;

    const isOwner = (userData && _ownerId == userData.id);

    const element = document.createElement('div');
    element.classList.add('catch');
    element.innerHTML = `
    <label>Angler</label>
                     <input type="text" class="angler" value="${angler}" ${!isOwner ? 'disabled' : ""}>
                 <label>Weight</label>
                     <input type="text" class="weight" value="${weight}" ${!isOwner ? 'disabled' : ""}>
                 <label>Species</label>
                     <input type="text" class="species" value="${species}" ${!isOwner ? 'disabled' : ""}>
                 <label>Location</label>
                     <input type="text" class="location" value="${location}" ${!isOwner ? 'disabled' : ""}>
                 <label>Bait</label>
                     <input type="text" class="bait" value="${bait}" ${!isOwner ? 'disabled' : ""}>
                 <label>Capture Time</label>
                     <input type="number" class="captureTime" value="${captureTime}" ${!isOwner ? 'disabled' : ""}>
             <button class="update" data-id="${_id}" ${!isOwner ? 'disabled' : ""}>Update</button>
             <button class="delete" data-id="${_id}" ${!isOwner ? 'disabled' : ""}>Delete</button>              
    `;
    return element;
}

async function onLoadCatch() {
    const form = document.getElementById('main')
    form.appendChild(catches);
    const url = `http://localhost:3030/data/catches`;

    const response = await fetch(url);
    const data = await response.json();
    
    return data;
}

async function onCreateSubmit(e) {
    e.preventDefault();
    
    if(!JSON.parse(sessionStorage.getItem('userData'))) {
        window.location = './login.html';
        return;
    }

    const form = e.target; 
    const formData = new FormData(form);
    const info = Object.fromEntries(formData);
    
    try {
        if(Object.values(info).some(x => x == '')){
            throw new Error('All fields are required!');
        };
        const url = `http://localhost:3030/data/catches`;
        const header = getHeader("POST", info);
        const response = await fetch(url, header);
       
        if(response.ok !==  true) {
            const error = await response.json();
            throw new Error(error.message);
        };
        e.target.reset();
        listOfCatches();
    } catch (err){
        alert(err.message); 
    }
    
}


function getHeader(method, body) {
    let token;
    try {
        token = JSON.parse(sessionStorage.getItem('userData')).accessToken;
    } catch {
        token = undefined;
    }
    
    const header = {
        method: `${method}`,
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token
        }
    };

    if(body) {
        header.body = JSON.stringify(body);
    };

    return header;
}