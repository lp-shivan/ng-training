import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

const employeesPromise: Promise<Employee[]> = Promise.resolve([
    {
        id: 1,
        emp_no: 123,
        first_name: 'Deepika',
        last_name: 'Padukone',
        birth_date: new Date(),
        hire_date: new Date(),
        gender: 'F',
    },
    {
        id: 2,
        emp_no: 125,
        first_name: 'Rock Dwayne',
        last_name: 'Johnson',
        birth_date: new Date(),
        hire_date: new Date(),
        gender: 'M'
    },
    {
        id: 3,
        emp_no: 126,
        first_name: 'Alexandra',
        last_name: 'Daddario',
        birth_date: new Date(),
        hire_date: new Date(),
        gender: 'F'
    },
]);


@Injectable()
export class EmployeeService {

    // get all users
    getEmployees() {
        return employeesPromise;
    }

    // get a specific user
    getEmployee(id: number): Promise<Employee> {
        const employee =  employeesPromise.then(employees => {
            return employees.find(e => {
                return e.id === id;
            });
        });

        return employee;
    }
}
