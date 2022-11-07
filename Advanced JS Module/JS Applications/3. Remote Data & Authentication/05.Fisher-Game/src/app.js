window.addEventListener('DOMContentLoaded', onLoadHTML);
document.getElementById('addForm').addEventListener('submit', createCatch);
document.querySelector('.load').addEventListener('click', onLoadCatch);
document.getElementById('logout').addEventListener('click', onLogOut);

//USE JSON.parse(sessionStorage.getItem('userData')) to get all the fields and to check 
//if we're loged or not;
/* From index.html two btns musr dissapear - they are in a div with class= catch; and we must create new
 
*/

async function onLogOut() {
    const url = `http://localhost:3030/users/logout`;

    const header = getHeader('GET');
    debugger;
    const response = await fetch(url, header);
   sessionStorage.clear();
   onLoadHTML();

}

function onLoadHTML() {
    let token;
    try {
        token = JSON.parse(sessionStorage.getItem('userData')).accessToken;
    } catch {
        token = undefined;
    }
    const userName = document.querySelector('p.email span');
    const addBtn = document.querySelector('.add');
    const fieldsetBtns = document.getElementById('main');
   // const section = document.getElementById('home-view');
debugger
    if(token){
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = 'inline-block';
        userName.textContent = JSON.parse(sessionStorage.getItem('userData')).email;
        addBtn.disabled = false;
        fieldsetBtns.innerHTML = `
        <legend>Catches</legend>
        <div id="catches">
            <div class="catch">
                <label>Angler</label>
                <input type="text" class="angler" value="Paulo Admorim">
                <label>Weight</label>
                <input type="text" class="weight" value="636">
                <label>Species</label>
                <input type="text" class="species" value="Atlantic Blue Marlin">
                <label>Location</label>
                <input type="text" class="location" value="Vitoria, Brazil">
                <label>Bait</label>
                <input type="text" class="bait" value="trolled pink">
                <label>Capture Time</label>
                <input type="number" class="captureTime" value="80">
                <button class="update" data-id="07f260f4-466c-4607-9a33-f7273b24f1b4">Update</button>
                <button class="delete" data-id="07f260f4-466c-4607-9a33-f7273b24f1b4">Delete</button>
            </div>
            <div class="catch">
                <label>Angler</label>
                <input type="text" class="angler" value="John Does" disabled>
                <label>Weight</label>
                <input type="text" class="weight" value="554" disabled>
                <label>Species</label>
                <input type="text" class="species" value="Atlantic Blue Marlin" disabled>
                <label>Location</label>
                <input type="text" class="location" value="Buenos Aires, Argentina" disabled>
                <label>Bait</label>
                <input type="text" class="bait" value="trolled pink" disabled>
                <label>Capture Time</label>
                <input type="number" class="captureTime" value="120" disabled>
                <button class="update" data-id="bdabf5e9-23be-40a1-9f14-9117b6702a9d" disabled>Update</button>
                <button class="delete" data-id="bdabf5e9-23be-40a1-9f14-9117b6702a9d" disabled>Delete</button>
            </div>
        </div>
        `
    } else {
        document.getElementById('guest').style.display = 'inline-block';
        document.getElementById('user').style.display = 'none';
        userName.textContent = 'guest';
        addBtn.disabled = true;
        fieldsetBtns.innerHTML = "";
        fieldsetBtns.textContent = 'Click to load catches';
    }
}

async function onLoadCatch() {
    const url = `http://localhost:3030/data/catches`;

    const response = await fetch(url);
    const data = await response.json();
    //render method; 
    return data;
}

function createCatch(e) {
    e.preventDefault();
    const form = e.target; 
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    onCreateCatch(data);
}

async function onCreateCatch(body) {
    const url = `http://localhost:3030/data/catches`;
    const header = getHeader("POST", body);
    const response = await fetch(url, header);
    const data = await response.json();
    return data;
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