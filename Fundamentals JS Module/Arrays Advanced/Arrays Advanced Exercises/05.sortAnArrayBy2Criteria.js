function sortAnArrayBy2Criteria(params) {

    let sortedArr = params.sort((a, b)=> {
        return a.length - b.length || a.localeCompare(b);
    })

    sortedArr.forEach(element => {
        console.log(element);
    });

}
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])