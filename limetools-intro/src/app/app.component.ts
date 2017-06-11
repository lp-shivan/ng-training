import { Component } from '@angular/core';
import { Employee } from './shared/models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  employee: Employee = {
    emp_no: 25,
    first_name: "Deepika",
    last_name: "Padukone",
    gender: 'F',
    birth_date: new Date(),
    hire_date: new Date()
  };

  employees: Employee[] = [
    {
      emp_no: 25,
      first_name: "Deepika",
      last_name: "Padukone",
      gender: 'F',
      birth_date: new Date(),
      hire_date: new Date()
    },
    {
      emp_no: 25,
      first_name: "Alexandra",
      last_name: "Daddario",
      gender: 'F',
      birth_date: new Date(),
      hire_date: new Date()
    },
    {
      emp_no: 25,
      first_name: "Rock Dwayne",
      last_name: "Johnson",
      gender: 'M',
      birth_date: new Date(),
      hire_date: new Date()
    }
  ];
  selectedEmployee: Employee;

  showEmployee(employee: Employee) {
    this.selectedEmployee = employee;
    console.log(employee);
  }

  onEmployeeCreated(event) {
    console.log('This is getting triggered , ' + event);
    this.employees.push(event.employee);
  }
}
