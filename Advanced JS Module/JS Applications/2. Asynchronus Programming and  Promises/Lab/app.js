const baseUrl = `http://localhost:3030`;
window.addEventListener('load', () => {
    fetch(`${baseUrl}/jsonstore/cookbook/recipes`)
        .then(res => res.json())
        .then(recipes => {
            renderRecipes(Object.values(recipes));
        })
})

function renderRecipes(recipes) {
    const main = document.querySelector('main');

    main.innerHTML = "";

    recipes.forEach(x => {
        main.appendChild(creatRecipe(x));
    });
}

function creatRecipe(recipe) {
    let recipeElement = document.createElement('article');
    recipeElement.classList.add('preview');

    recipeElement.addEventListener('click', () => {
        fetch(`${baseUrl}/jsonstore/cookbook/details/${recipe._id}`)
            .then(res => res.json())
            .then(details => {
                //  Problem: need to remove the event listener
                const main = document.querySelector('main');
                main.innerHTML = '';

                main.appendChild(renderDetailedRecipe(details));
            })
    });
    debugger;

    //WARINING XSS!!! 
    recipeElement.innerHTML = `
    <div class="title">
        <h2>${recipe.name}</h2>
    </div>
    <div class="small">
        <img src=${recipe.img}>
    </div>
    `;

    return recipeElement
}

function renderDetailedRecipe(details) {
    let recipeElement = document.createElement('article');

    recipeElement.innerHTML = `
    <h2>${details.name}</h2>
    <div class="band">
        <div class="thumb">
            <img src=${details.img}>
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${details.ingredients.map(x => `<li>${x}</li>`).join('')}
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        ${details.steps.map(x => `<p>${x}</p>`).join('')}
    </div>
    `;

    return recipeElement;
}

