function listOfProducts(productsArr) {
    let order = 1;

    let productsInAlphabetOrder = productsArr.sort()

    for(let el of productsInAlphabetOrder) {
        console.log(`${order}. ${el}`);
        order++;
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
listOfProducts(['Watermelon', 'Banana', 'Apples'])
