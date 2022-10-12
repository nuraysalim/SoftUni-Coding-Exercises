function solution() {
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    debugger;
    return function inputHandler(input) {
        let actionHandler = cmdOption();

        let [cmd, mElement, quantity] = input.split(' ');
        return actionHandler[cmd](mElement, quantity);
    }
    
    function cmdOption() {
        return {
            restock: (mictoElement, quantity) => {
                store[mictoElement] = store[mictoElement] + Number(quantity);
                return 'Success';
            },
            prepare: (recipe, quantity) => {
                let isDone = true;
                let str = '';
                let copyOfStore = JSON.parse(JSON.stringify(store));
                for (const [key, v] of Object.entries(recipes[recipe])) {
                    let neededValue = Number(quantity) * v;
                        if(store[key] < neededValue) {
                            isDone = false;
                            str = `Error: not enough ${key} in stock`;
                            break;
                        }
                    copyOfStore[key] -= neededValue;
                }

                if(!isDone) {
                    return str;
                }
                store = copyOfStore;
                return 'Success';
            },
            report: () => {
                return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
            }

        }
    }
}
let manager = solution ();
console.log (manager("restock flavour 50"));// Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 