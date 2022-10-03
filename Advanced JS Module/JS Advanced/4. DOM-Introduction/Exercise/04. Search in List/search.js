function search() { 
   let listOfTowns = Array.from(document.querySelectorAll('ul li'));
   let searchText = document.getElementById('searchText').value;
   let matchesCounter = 0;
   
  
   for (const liRow of listOfTowns) {
      let text = liRow.textContent;

      if(text.includes(searchText)){
         liRow.style.textDecoration = 'underline';
         liRow.style.fontWeight = 'bold';
         matchesCounter++;
      } else {
         liRow.style.textDecoration = 'none';
         liRow.style.fontWeight = '';
      }
   }

   document.getElementById('result').innerText = `${matchesCounter} matches found`;
}
