class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee (name, salary, position, department) {
        if(!name || !salary || salary < 0 || !position || !department) {
            throw new Error ("Invalid input!");
        }

        if(!this.departments[department]) {
            this.departments[department] = {
                avgSalary: 0,
                sumSalary: 0,
                employees: []
            }
        }
        
        this.departments[department].employees.push({name, salary, position});
        this._updateDepartment(this.departments[department], salary);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    _updateDepartment (department, employeeSalary) {
        department.sumSalary += Number(employeeSalary);
        department.avgSalary = department.sumSalary / department.employees.length; 
    }

    bestDepartment () {
       let bestDept = Object.entries(this.departments).sort(([departmentOne, deptInfoOne], [departmentTwo, deptInfoTwo]) =>{
            return deptInfoOne - deptInfoTwo;
        })[0];
        let sortedEmployees = bestDept[1].employees.sort((objOne, objTwo) =>{
         return objTwo.salary - objOne.salary || (objOne.name).localeCompare(objTwo.name);
        });

        let buff = '';
        let counter = 0;
        let numOfEmployees = sortedEmployees.length - 1;
        for (const obj of sortedEmployees) {
            if(numOfEmployees === counter) {
                buff += `${obj.name} ${obj.salary} ${obj.position}`;
                break;
            } 
            buff += `${obj.name} ${obj.salary} ${obj.position}\n`;
            counter++;
        };

        return `Best Department is: ${bestDept[0]}\nAverage salary: ${bestDept[1].avgSalary.toFixed(2)}\n${buff}`
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());