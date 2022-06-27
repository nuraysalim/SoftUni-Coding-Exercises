function schoolLibraryRematch(input) {
    let books = input.shift().split('&');
  
    let index = 0;
    let command = input[index].split(' | ');
    index++;

    while (command !== 'Done') {
        let currCom = command.shift().trim();
        let book = command.join();


        switch (currCom) {
            case 'Add Book':
                if(!books.includes(book)){
                    books.unshift(book);
                }
                break;
            case 'Take Book': 
            if(books.includes(book)){
                let indexOfBook = books.indexOf(book);
                books.splice(indexOfBook, 1);
            }
                break;
            case 'Swap Books':
                break;
            case 'Insert Book':
                break;
            case 'Check Book':
                break;
        }


        command = input[index];
        index++;
    }
}
schoolLibraryRematch(["Book1&Book2&Book3&Book4",
"Add Book | Book5",
"Take Book | 1",
"Swap Books | Book2 | Book4",
"Check Book | 5",
"Swap Books | Book3 | Book1",
"Done"])
// schoolLibraryRematch(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
// "Add Book | Catch-22",
// "Swap Books | Anna Karenina | Catch-22",
// "Take Book | David Copperfield",
// "Check Book | 2",
// "Swap Books | Don Quixote | Ulysses",
// "Done"])
