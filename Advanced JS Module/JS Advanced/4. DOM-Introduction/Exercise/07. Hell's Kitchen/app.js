function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      debugger;
      let listOfRestaurants = document.querySelector('#inputs textarea').value;
      listOfRestaurants = JSON.parse(listOfRestaurants);
      let objOfRest = {};

      for (const restraurantInfo of listOfRestaurants) {
         let [name, ...employees] = restraurantInfo.split(' - ');
         let avgSalary = 0;
         let highestSalary = 0;

         employees = employees[0].split(', ');

         for (const nameAndSalary of employees) {
            let [nameOfEmpl, salary] = nameAndSalary.split(' ');
            salary = Number(salary);
            avgSalary += salary;

            if(highestSalary < salary) {
               highestSalary = salary;
            }
         }
      }

      
   }
}