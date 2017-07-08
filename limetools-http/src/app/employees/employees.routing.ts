import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {EmployeesComponent} from './employees.component';
import { EmployeeCreateComponent } from "app/employees/employee-create/employee-create.component";

const employeesRoutes: Routes = [
    {
        path: '',
        component: EmployeesComponent,
        children: [
            {
                path: '',
                component: EmployeeListComponent
            },
            {
                path: 'create',
                component: EmployeeCreateComponent
            },
            {
                path: ':id',
                component: EmployeeDetailsComponent
            },
        ]
    },

];

export const employeesRouting = RouterModule.forChild(employeesRoutes);
