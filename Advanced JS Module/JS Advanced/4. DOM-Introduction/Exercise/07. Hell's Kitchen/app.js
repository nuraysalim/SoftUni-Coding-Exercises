function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      // We take the input and we parse it to an array:
      let listOfRestaurants = document.querySelector('#inputs textarea').value;
      listOfRestaurants = JSON.parse(listOfRestaurants);
      // I take the referense to the output elements and clear them:
      let bestRestaurant = document.querySelector('#bestRestaurant p');
      let salariesOfEmployees = document.querySelector('#workers p');
      bestRestaurant.textContent = '';
      salariesOfEmployees.textContent = '';
      let objOfRest = {};

      for (const restraurantInfo of listOfRestaurants) {
         let [name, ...currEmployees] = restraurantInfo.split(' - ');
         let sumSalary = 0;
         let highestSalary = 0;

         if(!objOfRest.hasOwnProperty(name)) {
            objOfRest[name] = {};
            objOfRest[name].allEmployees = []; 
            objOfRest[name].avgSalary = 0;
            objOfRest[name].sumSalary = 0
            objOfRest[name].bestSalary = 0;
         }

         currEmployees = currEmployees[0].split(', ');

         for (const nameAndSalary of currEmployees) {
            let splittedInfo = nameAndSalary && nameAndSalary.split(' ');
            objOfRest[name].allEmployees.push(splittedInfo);

            let salary = Number(splittedInfo[1]);
            sumSalary += salary;

            if(highestSalary < salary) {
               highestSalary = salary;
            }
         }

         objOfRest[name].sumSalary += sumSalary;

        objOfRest[name].avgSalary = objOfRest[name].sumSalary / objOfRest[name].allEmployees.length;
         objOfRest[name].bestSalary = objOfRest[name].bestSalary < highestSalary ? highestSalary : objOfRest[name].bestSalary;
      }

      let sortRes = Object.entries(objOfRest).sort(([nameA, infoA], [nameB, infoB]) => {
       return  infoB.avgSalary - infoA.avgSalary;
      })[0];

      bestRestaurant.textContent = `Name: ${sortRes[0]} Average Salary: ${sortRes[1].avgSalary.toFixed(2)} Best Salary: ${sortRes[1].bestSalary.toFixed(2)}`;
      
      let employeesSorted = objOfRest[sortRes[0]].allEmployees.sort(([nameA, salaryA], [nameB, salaryB]) => {
         return salaryB - salaryA;
      });

      let buff = ''
      for (const [nameOfEmployee, salary] of employeesSorted) {
         buff +=
         `Name: ${nameOfEmployee} With Salary: ${salary} `;
      };
      salariesOfEmployees.textContent += buff;
   }
}