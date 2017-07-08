import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesDetailsComponent} from './employees-details/employees-details.component';
import {EmployeesMainComponent} from './employees-main/employees-main.component';

// routing related stuffs
import {employeesRouting} from './employees.routing';

// services
import { EmployeeService } from '../shared/services/employee.service';
import { EmployeeResolveService } from '../shared/services/employee-resolve.service';
import { EmployeesResolveService } from '../shared/services/employees-resolve.service';

@NgModule({
    imports: [
        CommonModule,
        employeesRouting
    ],
    declarations: [
        EmployeesListComponent,
        EmployeesDetailsComponent,
        EmployeesMainComponent
    ],
    providers: [
        EmployeeService,
        EmployeeResolveService,
        EmployeesResolveService,
    ]
})
export class EmployeesModule {

}
