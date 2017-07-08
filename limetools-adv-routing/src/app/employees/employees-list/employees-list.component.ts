import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/models/employee';
import { EmployeeService } from '../../shared/services/employee.service';

import { ActivatedRoute } from '@angular/router';

// const employees: Employee[] = [
//   {
//     id: 1,
//     emp_no: 123,
//     first_name: 'Deepika',
//     last_name: 'Padukone',
//     birth_date: new Date(),
//     hire_date: new Date(),
//     gender: 'F',
//   },
//   {
//     id: 2,
//     emp_no: 125,
//     first_name: 'Rock Dwayne',
//     last_name: 'Johnson',
//     birth_date: new Date(),
//     hire_date: new Date(),
//     gender: 'M'
//   },
//   {
//     id: 3,
//     emp_no: 126,
//     first_name: 'Alexandra',
//     last_name: 'Daddario',
//     birth_date: new Date(),
//     hire_date: new Date(),
//     gender: 'F'
//   },
// ];

@Component({
  templateUrl: './employees-list.component.html'
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit() {

    // fetching the list of employees from the employee service
    // this.employeeService.getEmployees().then((employees) => {
    //   this.employees = employees;
    // });

    // this.route.data.forEach(data => {
    //   console.log(data.users);
    // });
    this.route.data.forEach((data: { employees: Employee[] }) => {
      console.log('Printing');
        this.employees = data.employees;
    });

  }

}
