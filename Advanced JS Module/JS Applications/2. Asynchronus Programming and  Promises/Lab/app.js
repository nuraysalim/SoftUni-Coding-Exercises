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
            .then(details => console.log(details))
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

