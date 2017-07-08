import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// our app components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Components by Functionality
// import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
// import { EmployeesDetailsComponent } from './employees/employees-details/employees-details.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'employees',
        loadChildren: 'app/employees/employees.module#EmployeesModule'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
