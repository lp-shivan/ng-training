import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Employee } from '../models/employee';
import { EmployeeService } from './employee.service';

@Injectable()
export class EmployeesResolveService implements Resolve<Employee[]> {

    employees: Employee[];

    constructor(private service: EmployeeService) {

    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.service.getEmployees().then(employees => employees);
    }
}
