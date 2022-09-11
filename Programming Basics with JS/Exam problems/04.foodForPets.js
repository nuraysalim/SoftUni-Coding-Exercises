function foodForPets(input) {
        const days = Number(input[0]);
        const amountOfFood = Number(input[1]);
        
        let index = 2
        let eatenDogFood = 0;
        let eatenCatFood = 0;
        let amountOfBiscuits = 0;
        let totalEatenFood = 0;
    
        for(let i = 1; i <= days; i++) {
           let  tempEatenDogFood = Number(input[index]);
            index++;
            eatenDogFood += tempEatenDogFood;
        let tempEatenCatFood = Number(input[index]);
            index++
            eatenCatFood += tempEatenCatFood;
            totalEatenFood += tempEatenDogFood + tempEatenCatFood;
    
            if (i % 3 === 0) {
                let biscuiteGr = tempEatenDogFood + tempEatenCatFood;
                amountOfBiscuits += biscuiteGr * 0.1; 
            }
    
    
        }
        let perEatenFood = totalEatenFood / amountOfFood * 100;
        let perEatenDogFood = eatenDogFood / totalEatenFood * 100;
        let perEatenCatFood = eatenCatFood / totalEatenFood * 100;
        
    
        console.log(`Total eaten biscuits: ${Math.round(amountOfBiscuits)}gr.`);
        console.log(`${perEatenFood.toFixed(2)}% of the food has been eaten.`);
        console.log(`${perEatenDogFood.toFixed(2)}% of the food has been eaten.`);
        console.log(`${perEatenCatFood.toFixed(2)}% eaten from the cat.`);
    
    }
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);
foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);