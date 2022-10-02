function search() { 
   debugger;
   let listOfTowns = Array.from(document.querySelectorAll('ul li'));
   let searchText = document.getElementById('searchText').value;
   let allTownsArr = [];

   for (const liRow of listOfTowns) {
      let text = liRow.textContent;

      if(text.includes(searchText)){

      }
   }


}
