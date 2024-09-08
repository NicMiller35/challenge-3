
const addEmployeesBtn = document.querySelector('#add-employees-btn');



const collectEmployees = function () {
const employeesFLS = [];
let addEmployee = true;

while (addEmployee) {
  let firstName = prompt("Enter the employees first name:");
  let lastName = prompt("Enter the employees last name:");
  let salary = prompt("Enter the employees salary:");
  if (isNaN(salary)) {
  salary = 0;
}
  const employeeProfile = {
    firstName: firstName,
    lastName: lastName,
    salary: parseFloat(salary)
  };
  employeesFLS.push(employeeProfile);
  addEmployee = confirm("Do you want to add another employee?");
  }
  console.log(employeesFLS)
  return employeesFLS;
};

  


const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;
  
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  let averageSalary = (totalSalary / employeesArray.length)
   console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary.toFixed(2)}`);
};


const getRandomEmployee = function (employeesArray) {
  let getRandomEmployee = Math.floor(Math.random() * employeesArray.length);

  console.log(`Congratulations to ${employeesArray[getRandomEmployee].firstName} ${employeesArray[getRandomEmployee].lastName}, our random drawing winner!`);

};

const displayEmployees = function (employeesArray) {

  const employeeTable = document.querySelector('#employee-table');


  employeeTable.innerHTML = '';


  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');

    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};


addEmployeesBtn.addEventListener('click', trackEmployeeData)
