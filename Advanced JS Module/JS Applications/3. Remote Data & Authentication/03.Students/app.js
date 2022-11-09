window.addEventListener('DOMContentLoaded', getAllStudents);
document.getElementById("form").addEventListener('submit', (e) =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    
    createStudent(data);
    e.target.reset();
});

const url = `http://localhost:3030/jsonstore/collections/students`;


async function getAllStudents() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const arrayOfEls = Object.values(data).map(createPreview);
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '';

         for (const tr of arrayOfEls) {
             document.querySelector('tbody').appendChild(tr);
        }
        
    } catch (e) {
        alert(e.message);
    }
};


async function createStudent(data) {
    const {firstName, lastName, facultyNumber, grade} = data;
    const body ={
        firstName,
        lastName,
        facultyNumber,
        grade
    }; 
    const header = getHeader("POST", body);

    try {
        const response = await fetch(url, header);
       
        if(response.ok !== true) {
            const error = await response.json();
            throw new Error(error.message);
        };

        const p = document.querySelector('p');
        p.textContent = 'A student is added successfully!';
        setTimeout(() => {
           p.textContent = ''}, 2000);

        getAllStudents()
    } catch (err) {
        alert(err.message);
    }
};

function getHeader(method, body) {
    const header = {
        method: `${method}`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    };
    return header;
};

function createPreview(item) {
    const {firstName, lastName, facultyNumber, grade} = item;

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${facultyNumber}</td>
    <td>${grade}</td>
    `;

    return tr;
}