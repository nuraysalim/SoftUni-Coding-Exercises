function create(words) {
   let parentDiv = document.getElementById('content');

  for (const word of words) {
   let newDiv = document.createElement('div');
   let p = document.createElement('p'); 

   p.textContent = word;
   p.style.display = 'none';

   newDiv.appendChild(p);
   newDiv.addEventListener('click', () => {
      p.style.display = '';
   })
   parentDiv.appendChild(newDiv);
 }
}