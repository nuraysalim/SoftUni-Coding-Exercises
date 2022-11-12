import {showDetails} from "./details.js";

const section = document.getElementById('home-view');
const main = document.getElementsByTagName('main')[0];
const form = document.querySelector('#home-view form');
form.addEventListener('submit', onSubmit); 
section.remove();
const url = `http://localhost:3030/jsonstore/collections/myboard/posts`;

export async function showHome() {
    const topiContainer = section.querySelector('.topic-title');
    const posts = await loadPost();
    const content = Object.values(posts).map(topicTemplate);

    topiContainer.replaceChildren(...content);

debugger;
    main.replaceChildren(section);   
    
}

function topicTemplate(data) {
    const container = document.createElement('div');
    container.classList.add('topic-container');
    container.innerHTML = `
        <div class="topic-name-wrapper"">
            <div class="topic-name">
                <a href="#" class="normal" id="${data._id}">
                    <h2>${data.topicName}</h2>
                </a>
                <div class="columns">
                    <div>
                        <p>Date: <time>${data.date}</time></p>
                        <div class="nick-name">
                            <p>Username: <span>${data.username}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>           
    `;

    container.querySelector('a').addEventListener('click', showDetails);
    return container;
}

function onSubmit(e) {
    e.preventDefault();
    //Here prof used innerHTML
    if(e.submitter.textContent === 'Cancel') {
        return clearForm();
    };

    const formData = new FormData(form);
    const {topicName, username, postText} = Object.fromEntries(formData);

    createPost({topicName, username, postText, date: new Date()});
    clearForm();
    debugger
};

function clearForm() {
    form.reset();
}

async function createPost(body) {

    const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    });

    const data = await response.json();
    return data;
}

async function loadPost () {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}



showDetails();