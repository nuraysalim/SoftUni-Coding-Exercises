// const baseUrl = `http://localhost:3030/jsonstore/collections/books`;
// document.getElementById('loadBooks').addEventListener('click', loadBooks);
// document.querySelector('form').addEventListener('submit', addNewBook);
// document.querySelector('tbody').addEventListener('click', editOrDelete);

// const submitBtn = document.querySelector('form button');

// async function loadBooks() {
//     try {
//         const response = await fetch(baseUrl);
//         const data = await response.json();

//        const arrayOfEls = Object.entries(data).map(createBookRow);

//         const tbody = document.querySelector('tbody');
//         tbody.innerHTML;

//         for (const tr of arrayOfEls) {
//             tbody.appendChild(tr);
//         };

//     } catch (err) {
//         alert(err.message);
//     };
// };

// function createBookRow(arrayOfInfo) {
//     const id = arrayOfInfo[0];
//     const {author, title} = arrayOfInfo[1];

//     const tr = document.createElement('tr');
//     //I GOT THE ID HERE;

//    tr.innerHTML = `
//    <td name="title" data-id="${id}">${title}</td>
//    <td name="author" data-id="${id}">${author}</td>
//     <td>
//     <button class="edit" data-id="${id}">Edit</button>
//     <button class="delete" data-id="${id}">Delete</button>
//     </td>
//    `;
//    return tr;
// };

// async function addNewBook(e) {
//     e.preventDefault();

//     const form = new FormData(e.currentTarget);
//     const bookInfo = Object.fromEntries(form);
//     let header;
//     let response;
    
//     try {
//         if(Object.values(bookInfo).some(x => x === "")) {
//             throw new Error('A field is empty!');
//         };
        
//         if(submitBtn.textContent === 'Submit') {
//         header = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(bookInfo)
//         }; 
//         response = await fetch(baseUrl, header);
//         } else {
//          const inputTitle = document.querySelector('form input[name=title]');
//          const inputAuthor = document.querySelector('form input[name=author]');
//          const updatedBook = {
//             "title": inputTitle.value,
//             "author": inputAuthor.value
//          };
//          debugger;
//         const url = `http://localhost:3030/jsonstore/collections/books/${btnId}`;
//         header = {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(updatedBook)
//         };

//         response = await fetch(url, header);
//         h3.textContent = 'FORM';
//         submitBtn.textContent = 'Submit';
//     };

            

//         if(response.ok !== true) {
//             const error = await response.json();
//             throw new Error(error.message);
//         };
    
//         e.target.reset();
//         loadBooks();
//     } catch (err){
//         alert(err.message);
//     };
// };

// function editOrDelete(e) {
//     const source = e.target;
//     const sourceClass = source.classList.value;
    
//     if(!sourceClass || (sourceClass !== 'edit' && sourceClass !== 'delete')) {
//         return;
//     };
    
//     const title = e.target.parentNode.parentNode.querySelector('td[name=title]').textContent;
//     const author = e.target.parentNode.parentNode.querySelector('td[name=author]').textContent;
//     const id = source.dataset.id;

//     switch(sourceClass){
//         case 'edit': updateBook(title, author, id);
//         break;
//         case 'delete': deleteBook(id);
//             break;
//     }

// };

//     let btnId = null;
//     const h3 = document.querySelector('h3');

//  function updateBook(title, author, id) {
//     h3.textContent = "Edit FORM";
//     const titleEl = document.querySelector('input[name=title]');
//     titleEl.value = title;
//     const authorEl = document.querySelector('input[name=author]');
//     authorEl.value = author;
//     submitBtn.textContent = 'Save';
//     btnId = id;
//     debugger
// }

// async function deleteBook(id) {
//     const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
//     const header = {
//         method: "DELETE",
//         headers: {}
//     }; 
//     const response = await fetch(url, header);
//     loadBooks();
// }

function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/books';
    const loadButton = document.getElementById('loadBooks');
    const tableBody = document.querySelector('tbody');
    tableBody.addEventListener('click', modify);
    const form = document.querySelector('form');
    form.addEventListener('click', onSubmit);

    let editId = '';

    loadButton.addEventListener('click', onLoad);

    async function onSubmit(e) {
        e.preventDefault();
        if (e.target.tagName !== 'BUTTON') return;
        if (e.target.textContent == 'Save') {
            onSave(e);
            return;
        }

        let { title, author } = Object.fromEntries(new FormData(form).entries());
        if (title == '' || author == '') return;
        await fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, author })
        });
        document.querySelector('[name="title"]').value = '';
        document.querySelector('[name="author"]').value = '';
        onLoad();
    }
    async function onSave(e) {


        let { title, author } = Object.fromEntries(new FormData(form).entries());

        console.log(title, author);
        if (title == '' || author == '') return;
        document.querySelector('form h3').textContent = 'FORM';
        document.querySelector('form button').textContent = 'Submit';
        await fetch(`${baseUrl}/${editId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, author })
        });
        document.querySelector('[name="title"]').value = '';
        document.querySelector('[name="author"]').value = '';
        onLoad();
    }
    async function onLoad() {
        let response = await fetch(baseUrl);
        let data = Object.entries(await response.json());

        tableBody.innerHTML = '';
        console.log(data);

        for (const [key, { author, title }] of data) {
            let row = document.createElement('tr');

            let buttonCell = document.createElement('td');
            let editButton = createTag('button', 'Edit', null, key);
            let deleteButton = createTag('button', 'Delete', null, key);
            buttonCell.appendChild(editButton);
            buttonCell.appendChild(deleteButton);

            row.appendChild(createTag('td', title));
            row.appendChild(createTag('td', author));
            row.appendChild(buttonCell);

            tableBody.appendChild(row)
            console.log(key, title, author);
        }
    }
    function modify(e) {
        if (e.target.tagName !== 'BUTTON') return;
        e.target.textContent == 'Edit' ? onEdit(e) : onDelete(e);
    }

    async function onEdit(e) {
        editId = e.target.id;
        let title = e.target.parentNode.parentNode.children[0].textContent;
        let author = e.target.parentNode.parentNode.children[1].textContent;

        document.querySelector('[name="title"]').value = title;
        document.querySelector('[name="author"]').value = author;

        document.querySelector('form h3').textContent = 'Edit FORM';
        document.querySelector('form button').textContent = 'Save';

        e.target.parentNode.parentNode.remove();
    };

    async function onDelete(e) {
        await fetch(`${baseUrl}/${e.target.id}`, {
            method: 'delete',
        });
        e.target.parentNode.parentNode.remove();
    };


    function createTag(tag, text = null, className = null, id = null, type = null) {
        let el = document.createElement(tag);
        if (text) { el.textContent = text; }
        if (type) { el.type = type; }
        if (id) { el.id = id; }
        if (className) { el.className = className; }
        return el;
    }
}

solve()


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