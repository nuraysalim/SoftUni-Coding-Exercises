const baseUrl = `http://localhost:3030/jsonstore/collections/books`;
document.getElementById('loadBooks').addEventListener('click', loadBooks);
document.querySelector('form').addEventListener('submit', addNewBook);
document.querySelector('tbody').addEventListener('click', editOrDelete);

const submitBtn = document.querySelector('form button');

async function loadBooks() {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
       const arrayOfEls = Object.values(data).map(createBookRow);

        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '';

        for (const tr of arrayOfEls) {
            tbody.appendChild(tr);
        };

    } catch (err) {
        alert(err.message);
    };
};

function createBookRow(item) {
    const {author, title, _id} = item;


    const tr = document.createElement('tr');
    //I GOT THE ID HERE
   tr.innerHTML = `
   <td name="title" data-id="${_id}">${title}</td>
   <td name="author" data-id="${_id}">${author}</td>
    <td>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    </td>
   `;
   return tr;
};

async function addNewBook(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const bookInfo = Object.fromEntries(form);
    
    try {
        let header;
        let response;
        if(Object.values(bookInfo).some(x => x === "")) {
            throw new Error('A field is empty!');
        };
        
        // if(submitBtn.textContent === 'Submit') {
        header = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookInfo)
        };

        response = await fetch(baseUrl, header);
    // } else {
    //     const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    //     header = {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(bookInfo)
    //     };
        if(response.ok !== true) {
            const error = await response.json();
            throw new Error(error.message);
        };
    
        e.target.reset();
        loadBooks();
    } catch (err){
        alert(err.message);
    };
};

function editOrDelete(e) {
    const source = e.target;
    const sourceClass = source.classList.value;
    
    if(!sourceClass || (sourceClass !== 'edit' && sourceClass !== 'delete')) {
        return;
    };

    const title = e.target.parentNode.parentNode.querySelector('td[name=title]').textContent;
    const author = e.target.parentNode.parentNode.querySelector('td[name=author]').textContent;

    switch(sourceClass){
        case 'edit': updateBook(title, author);
            break;
        case 'delete':
            break;
    }

};

 function updateBook(title, author) {
    const h3 = document.querySelector('h3');
    h3.textContent = "Edit FORM";
    const titleEl = document.querySelector('input[name=title]');
    titleEl.value = title;
    const authorEl = document.querySelector('input[name=author]');
    authorEl.value = author;
    debugger
    submitBtn.textContent = 'Save';

    //From here you can call directly loadBooks() to refresh
}



/* Just in case:
 <tr>
                <td>Harry Poter</td>
                <td>J. K. Rowling</td>
                <td>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </td>
            </tr>
            <tr>
                <td>Game of Thrones</td>
                <td>George R. R. Martin</td>
                <td>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </td>
</tr>
*/ 