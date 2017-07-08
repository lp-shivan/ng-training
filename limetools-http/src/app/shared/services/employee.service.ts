import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Employee } from "app/shared/models/employee";

import { Observable } from "rxjs/Observable";


@Injectable()
export class EmployeeService {

    employeesUrl = 'http://localhost:3000/api/employees';

    constructor(private http: Http) { }

    getEmployees() : Observable<Employee[]> {
        return this.http.get(this.employeesUrl)
            .map((response) => response.json().data)
            .map(employees => employees.map(this.formatEmployee))
            .catch(this.handleError);
    }

    getEmployee(id: number) : Observable<Employee> {
        const empDetailsUrl = this.employeesUrl + '/' + id;
        return this.http.get(empDetailsUrl)
                    .map((response) => response.json().data)
                    .map((employee) => this.formatEmployee(employee))
                    .catch(this.handleError);
    }

    createEmployee(employee) {

        return this.http.post(this.employeesUrl, employee)
                .map((response) => response.json().data)
                .catch(this.handleError);
    }

    private formatEmployee(employee) {
        //console.log(employee);
        return {
            ...employee,
            full_name: `${employee.first_name} ${employee.last_name}`
        };
    }

    private handleError(err) {
        console.log('Handle error is being executed');
        const errBody = err._body;
        const errMessage = errBody ? errBody : err.toString();
        
        const messagesArray = errMessage.split('\n');
        return Observable.throw(messagesArray);
    }
}