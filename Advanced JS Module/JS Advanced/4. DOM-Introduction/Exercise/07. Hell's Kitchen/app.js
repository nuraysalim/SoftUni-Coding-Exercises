function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let listOfRestaurants = document.querySelector('#inputs textarea').value;
      listOfRestaurants = JSON.parse(listOfRestaurants);
      let objOfRest = {};
      let restaurantContentText = document.querySelector('#bestRestaurant p');
      let employeesContentText = document.querySelector('#workers p');
      restaurantContentText.textContent = '';
      employeesContentText.textContent = '';

      for (const restraurantInfo of listOfRestaurants) {
         let [name, ...currEmployees] = restraurantInfo.split(' - ');
         let avgSalary = 0;
         let highestSalary = 0;

         if(!objOfRest.hasOwnProperty(name)) {
            objOfRest[name] = {};
            objOfRest[name].allEmployees = []; 
         }

         currEmployees = currEmployees[0].split(', ');

         for (const nameAndSalary of currEmployees) {
            let splittedInfo = nameAndSalary.split(' ');
            objOfRest[name].allEmployees.push(splittedInfo);

            let salary = Number(splittedInfo[1]);
            avgSalary += salary;

            if(highestSalary < salary) {
               highestSalary = salary;
            }
         }

         avgSalary = avgSalary / currEmployees.length;

         if(!objOfRest[name].hasOwnProperty('averageSalary')) {
            objOfRest[name].averageSalary = avgSalary;
            objOfRest[name].bestSalary = highestSalary;
            continue;
         }

         let previousCountEmpl = objOfRest[name].allEmployees.length - currEmployees.length;
         let oldAvgSalary = objOfRest[name].averageSalary * previousCountEmpl;
         avgSalary = (avgSalary + oldAvgSalary) / objOfRest[name].allEmployees.lengt;

         objOfRest[name].averageSalary = avgSalary;
         objOfRest[name].bestSalary = objOfRest[name].bestSalary < highestSalary ? highestSalary : objOfRest[name].bestSalary;
      }


      let bestRestraurant;
      let bestAvgSalary = 0;

      for (const name in objOfRest) {
        let currAvgSalary = objOfRest[name].averageSalary;

        if(currAvgSalary > bestAvgSalary) {
         bestAvgSalary = currAvgSalary;
         bestRestraurant = name;
        };
      };

      restaurantContentText.textContent = `Name: ${bestRestraurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${objOfRest[bestRestraurant].bestSalary.toFixed(2)}`;
      let sortedBySalary = objOfRest[bestRestraurant].allEmployees.sort(([nameA, salaryA], [nameB, salaryB]) => {
         return salaryB - salaryA;
      });

      for (const [nameOfEmployee, salary] of sortedBySalary) {
         employeesContentText.textContent +=
         `Name: ${nameOfEmployee} With Salary: ${salary} `;
      };
   }
}