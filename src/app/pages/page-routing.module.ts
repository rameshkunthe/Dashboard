import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from '../pages/addemployee/addemployee.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { ListemployeeComponent } from '../pages/listemployee/listemployee.component';
import { EditemployeeComponent } from '../pages/editemployee/editemployee.component';
import { DetailsemployeeComponent } from '../pages/detailsemployee/detailsemployee.component';
import { LoginComponent } from '../pages/login/login.component';
import { AuthGuard } from '../guards/auth.guard';



const routes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
        children: [
            { path: 'add-employee', component: AddemployeeComponent, canActivate: [AuthGuard] },
            { path: 'edit-employee', component: EditemployeeComponent, canActivate: [AuthGuard] },
            { path: 'list-employee', component: ListemployeeComponent, canActivate: [AuthGuard] },
            { path: 'details-employee', component: DetailsemployeeComponent, canActivate: [AuthGuard] }
        ]

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true } )],
    exports: [RouterModule]
})
export class PageRoutingModule { }
