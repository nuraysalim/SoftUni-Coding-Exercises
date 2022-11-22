import {html, render} from './node_modules/lit-html/lit-html.js';
import {cats} from './catSeeder.js';


const root = document.getElementById('allCats');

const catTemplate = html`
    <ul>
        ${cats.map(el => createCat(el))}
    </ul>
`;

render(catTemplate, root);

function createCat(cat) {
    const result = html`
        <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button @click="${showInfo}" class="showBtn">Show status code</button>
                    <div class="status" style="display: none" id="${cat.id}">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
        </li>
    `;

    return result;
}

function showInfo(e) {
    const hiddenContainer = e.target.parentElement.querySelector('div.status');
    const button = e.target.parentElement.querySelector('button');

    if(hiddenContainer.style.display === 'none') {
        hiddenContainer.style.display = 'block';
        button.textContent = 'Hide status code';
    } else {
        hiddenContainer.style.display = 'none';
        button.textContent = 'Show status code';
    };
}

