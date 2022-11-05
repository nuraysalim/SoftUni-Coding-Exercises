function solution() {
    getTitles();

    function createDomItem(data) {
        const section = document.getElementById('main');

        for (const objOfInfo of data) {
            let header = objOfInfo.title;
            let id = objOfInfo._id;
    
            
            section.innerHTML += ` 
            <div class="accordion">
            <div class="head">
                <span>${header}</span>
                <button class="button" id="${id}">More</button>
            </div>
            <div class="extra">
                <p id="${id}1"></p>
            </div>
        </div>`;
        }

     
        const buttons = document.querySelectorAll('button');
        for (const btn of buttons) {
            btn.addEventListener('click', revealContent);
            getArticle(btn.id);
        }
    }

    function revealContent(e) {
        let btn = e.target;
        const hiddenInfo = btn.parentNode.parentNode.querySelector('div[class=extra]');
        hiddenInfo.style.display = 'block';
        btn.textContent = 'Less';
        btn.removeEventListener('click', revealContent);
        btn.addEventListener('click', hideContent);
    }

    function hideContent(e) {
        let btn = e.target;
        const shownInfo = btn.parentNode.parentNode.querySelector('div[class=extra]');
        shownInfo.style.display = 'none';
        btn.textContent = 'More';
        btn.removeEventListener('click', hideContent);
        btn.addEventListener('click', revealContent);
    }

    function addText(data, id) {
        let p = document.getElementById(`${id}1`);
        p.textContent = data.content;
    }
    
    async function getTitles() {
        let url = `http://localhost:3030/jsonstore/advanced/articles/list`;

        let response = await fetch(url);
        let data = await response.json();
        createDomItem(data);
    }

    async function getArticle(id) {
        let baseUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

        let response = await fetch(baseUrl);
        let data = await response.json();
        addText(data, id)
    }
}
solution()