import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../shared/models/employee';
import { EmployeeService } from '../../shared/services/employee.service';

@Component({
  templateUrl: './employee-details.component.html'
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService) {

  }


  ngOnInit() {
    // grab the current employee id
    const id: number = parseInt(this.route.snapshot.params.id, 10);
    // this.employee = employees.find(function(employee) {
    //   return employee.id === id;
    // });

    this.employeeService.getEmployee(id).subscribe((employee) => {
          console.log(JSON.stringify(employee));
          this.employee = employee;
        });


  }

  goBack() {
    this.router.navigate(['/employees']);
  }

  showAboutPage() {
    this.router.navigate(['/about']);
  }

}
