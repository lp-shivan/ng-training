import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Employee } from '../../shared/models/employee';
import { EmployeeService } from '../../shared/services/employee.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  employeesUrl = 'http://localhost:3000/api/employees';
  errorMessage: string;

  constructor(private employeeService: EmployeeService, 
              private route: ActivatedRoute,
              private http: Http) { }

  ngOnInit() {
    // this.http.get(this.employeesUrl)
    //     .map(res => res.json().data)
    //     .subscribe(employees => this.employees = employees);

    // we can also use promises
    // this.http.get(this.employeesUrl).toPromise()
    //   .then(response => {
    //     this.employees = response.json().data;
    //   });
    this.employeeService.getEmployees()
      .subscribe(
        employees => this.employees = employees, 
        errorMessage => {
          this.errorMessage = errorMessage;
          console.log(this.errorMessage);
        }
      );
  }

}
