import { Routes, RouterModule } from '@angular/router';
import {EmployeesListComponent} from './employees-list/employees-list.component';
import {EmployeesDetailsComponent} from './employees-details/employees-details.component';
import {EmployeesMainComponent} from './employees-main/employees-main.component';

import {EmployeesResolveService} from '../shared/services/employees-resolve.service';
import {EmployeeResolveService} from '../shared/services/employee-resolve.service';

const employeesRoutes: Routes = [
    {
        path: '',
        component: EmployeesMainComponent,
        children: [
            {
                path: '',
                component: EmployeesListComponent,
                resolve: {
                    employees: EmployeesResolveService
                }
            },
            {
                path: ':id',
                component: EmployeesDetailsComponent,
                resolve: {
                    employee: EmployeeResolveService
                }
            },
        ]
    },

];

export const employeesRouting = RouterModule.forChild(employeesRoutes);
