import {html, render} from './node_modules/lit-html/lit-html.js';
import {towns} from './towns.js'

const townsRoot = document.getElementById("towns");
const resultRoot = document.getElementById("result");
document.querySelector('button').addEventListener('click', search)

update()
function searchTemplate(townsName, match) {
   const ul = html`
      <ul>
         ${townsName.map(townName => createLiTemplate(townName, match))}
      </ul>
   `;
   return ul;
}

function createLiTemplate(town, match) {
    return html`
    <li class="${(match && town.includes(match)) ? "active" : ""}">${town}</li>
    `;
};

function update(text) {
   const ul = searchTemplate(towns, text);
   render(ul, townsRoot);
}

function search() {
   const textNode = document.getElementById('searchText');
   const text = textNode.value;
   textNode.value = "";
   update(text)
   updateCount();
};

function updateCount() {
   const count = document.querySelectorAll(".active").length;
   const countEl = count ? html`<p>${count} matches found</p>` : "";
   render(countEl, resultRoot);
}
