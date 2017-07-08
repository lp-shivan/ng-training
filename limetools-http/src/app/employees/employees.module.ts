import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {EmployeesComponent} from './employees.component';

// routing related stuffs
import {employeesRouting} from './employees.routing';


// services
import { EmployeeService } from '../shared/services/employee.service';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        employeesRouting
    ],
    declarations: [
        EmployeeListComponent,
        EmployeeDetailsComponent,
        EmployeesComponent,
        EmployeeCreateComponent
    ],
    providers: [
        EmployeeService
    ]
})
export class EmployeesModule {

}
