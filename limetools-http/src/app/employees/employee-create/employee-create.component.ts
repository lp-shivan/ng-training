import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { EmployeeService } from "app/shared/services/employee.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: './employee-create.component.html'
})
export class EmployeeCreateComponent implements OnInit {
  employee: Employee = new Employee();
  errorMessages: string[];

  constructor(private service: EmployeeService, private router: Router) { }

  ngOnInit() {
    // this.employee = {
    //   gender: 'M',
    //   // emp_no: 345,
    //   // birth_date: new Date(),
    //   // first_name: 'Pongada',
    //   // last_name: 'Dubarkoors',
      
    //   // hire_date: new Date()
    // };
    this.employee.gender = 'M'
  }

  createEmployee(employee) {
    this.service.createEmployee(employee)
      .subscribe((employee) => {
        console.log('Success');
        const id = employee.id;
        this.router.navigate(['/employees' , id])
      },
      (errorMessages) => {
        this.errorMessages = errorMessages;
      })
  }
}
