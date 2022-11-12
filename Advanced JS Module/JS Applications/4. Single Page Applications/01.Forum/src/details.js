const section = document.getElementById('details-view');
const main = document.getElementsByTagName('main')[0];
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
section.remove()
let id;

export async function showDetails(e) {
    if(!e) {
        return;
    };

    if(e.target.tagName === 'H2') {
        id = e.target.parentElement.id;
    } else if (e.target.tagName === 'A') {
        id = e.target.id;
    } else {
        return;
    };

    const topic = await loadTopic(id);
    const comments = loadComment(id);
    const res = topicTemplate(topic, comments); //tbd
    // section.replaceChildren(res);
    main.replaceChildren(section);
}

function topicTemplate(data) {
    
};


function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const {postText, username} = Object.fromEntries(formData);
    createPost({postText, username, id});
}

async function createPost(body) {
    const url = `http://localhost:3030/jsonstore/collections/myboard/comments`;

    const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    });
    const data = await response.json();

    clearForm();
}

function clearForm() {
    form.reset();
}

async function loadComment(id) {
    const url = `http://localhost:3030/jsonstore/collections/myboard/comments` //TODO id?
    
}

async function loadTopic(id) {
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}