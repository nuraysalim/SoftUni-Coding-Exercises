function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputText = document.getElementById('searchField').value.toLowerCase();
      let rowsInfo = Array.from(document.querySelectorAll('.container tbody tr'));

      for (const row of rowsInfo) {
         let text = row.textContent.trim().split('\n');

         for(let info of text) {
            if(info.toLowerCase().includes(inputText)) {
               row.classList.add('select');
               break;
            } else {
               row.classList.remove('select');
            }
         }
      }
      document.getElementById('searchField').value = '';
   }
}