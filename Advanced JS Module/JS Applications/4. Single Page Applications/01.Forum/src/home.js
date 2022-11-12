import {showDetails} from "./details.js";

const section = document.getElementById('home-view');
const main = document.getElementsByTagName('main')[0];
const form = document.querySelector('#home-view form');
form.addEventListener('submit', onSubmit); 
section.remove();


export function showHome() {
    main.replaceChildren(section);   
    
}

function onSubmit(e) {
    e.preventDefault();
    //Here prof used innerHTML
    if(e.submitter.textContent === 'Cancel') {
        return clearForm();
    };

    const formData = new FormData(form);
    const {topicName, username, postText} = Object.fromEntries(formData);

    createPost({topicName, username, postText});
    clearForm();
    debugger
};

function clearForm() {
    form.reset();
}

async function createPost(body) {
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts`;

    const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    });

    const data = await response.json();
    return data;
}



showDetails();