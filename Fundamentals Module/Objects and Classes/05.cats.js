function cats(catsData) {
    class Cat {
        constructor(name ,age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    for(let catData of catsData){
        let token = catData.split(' ');
       let catName = token[0];
       let catAge = token[1];
       let catInfo = new Cat(catName, catAge);
       catInfo.meow();
    }
}
cats(['Mellow 2', 'Tom 5'])