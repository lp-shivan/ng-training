import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Employee } from '../models/employee';
import { EmployeeService } from './employee.service';

@Injectable()
export class EmployeeResolveService implements Resolve<Employee> {

    employee: Employee;

    constructor(private service: EmployeeService, private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot) {
        console.log(route.params);
        const employeeId: number  = parseInt(route.params.id);

        return this.service.getEmployee(employeeId).then(employee => {
            console.log(employee);

            if (employee) {
                return employee;
            } else {
                // navigate back to employees list page, if the required employee
                // does not exists
                this.router.navigate(['/about']);
                return false;
            }
        });
    }
}
